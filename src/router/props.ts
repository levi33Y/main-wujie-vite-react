import { RouteObject } from "react-router-dom";

export interface IRoutesHandleProps extends Pick<RouteObject, "handle"> {
  name: string;
  isMenu?: boolean;
  isCrumb?: boolean;
}
