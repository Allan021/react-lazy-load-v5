import { lazy } from "react";
import { Route } from "../models/Route";
import { About, Customer, Home } from "../DashBoard/pages";

export const ProductScreen = lazy(
  () =>
    import(
      /*webpackChunkName:"DashBoard"*/ "../components-bounds/pages/ProductScreen"
    )
);

export const routes: Route[] = [
  {
    path: "/products",
    Component: ProductScreen,
    name: "Products Screen",
  },
  {
    path: "/customer",
    Component: Customer,
    name: "Customers Screen",
  },
  {
    path: "/about",
    Component: About,
    name: "About Screen",
  },
  {
    path: "/home",
    Component: Home,
    name: "Home Screen",
  },
];
