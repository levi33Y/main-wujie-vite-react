import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Application } from "../page/application";
import { Home } from "../page/home";
import { Internal } from "../page/internal";
import { Micro } from "../page/micro";
import { MicroReactDom } from "../page/micro/micro-react-dom";
import { MicroWebrtc } from "../page/micro/micro-webrtc";
import { Service } from "../page/service";

export const main: RouteObject = {
  path: "/home",
  element: <Home />,
  children: [
    {
      path: "application",
      element: <Application />,
    },
    {
      path: "internal",
      element: <Internal />,
    },
    {
      path: "service",
      element: <Service />,
      children: [
        {
          path: "system",
          element: <MicroReactDom />,
        },
        {
          path: "personalized",
          element: <MicroWebrtc />,
        },
      ],
    },
  ],
};

export const micro: RouteObject = {
  path: "/micro",
  element: <Micro />,
  children: [
    {
      path: "/micro/webrtc",
      handle: {
        name: "webrtc",
      },
      element: <MicroWebrtc />,
    },
    {
      path: "/micro/reactDom",
      handle: {
        name: "reactDom",
      },
      element: <MicroReactDom />,
    },
  ],
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/home"} replace />,
  },
  main,
  micro,
  {
    path: "*",
    element: (
      <div className="flex justify-center mt-[10%] text-[1.5rem] text-transparent bg-gradient-to-b from-[#49A7FF] to-[#021528] bg-clip-text font-semibold">
        頁面不存在 Not found
      </div>
    ),
  },
];

export const Router = () => (
  <RouterProvider router={createBrowserRouter(routes)} />
);
