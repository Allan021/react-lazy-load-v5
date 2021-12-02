import { lazy, LazyExoticComponent } from "react";
import LoginScreen from "../auth/pages/LoginScreen";
type JSXElement = () => JSX.Element;
export interface Route {
  path: string;
  children?: [];
  name: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
}
export const DashBoard = lazy(
  () => import(/*webpackChunkName:"DashBoard"*/ "./pages/LayoutPage")
);

export const routes: Route[] = [
  {
    path: "/dashboard",
    Component: DashBoard,
    name: "DashBoard",
  },
  {
    path: "/login",
    Component: LoginScreen,
    name: "LoginScreen",
  },
];
