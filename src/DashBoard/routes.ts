import { lazy } from "react";
import LoginScreen from "../auth/pages/LoginScreen";
import { Route } from "../models/Route";

export const DashBoard = lazy(
  () => import(/*webpackChunkName:"DashBoard"*/ "./pages/LayoutPage")
);

export const routes: Route[] = [
  {
    path: "/login",
    Component: LoginScreen,
    name: "LoginScreen",
  },
  {
    path: "/dashboard",
    Component: DashBoard,
    name: "DashBoard",
  },
];
