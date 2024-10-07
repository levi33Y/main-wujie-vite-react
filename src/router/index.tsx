import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import {Home} from "../page/home";
import {MicroWebrtc} from "../page/micro/micro-webrtc";
import {MicroReactDom} from "../page/micro/micro-react-dom";
import {Micro} from "../page/micro";

export const main: RouteObject = {
  path: "/home",
  element: <Home />,
};

export const micro: RouteObject = {
  path: "/micro",
  element: <Micro/>,
  children: [
    {
      index: true,
      element: <Navigate to={"/"} replace />,
    },
    {
      path: "/micro/webrtc",
      handle: {
        name: "webrtc"
      },
      element: <MicroWebrtc />,
    },
    {
      path: "/micro/reactDom",
      handle: {
        name: "reactDom"
      },
      element: <MicroReactDom />,
    }
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
