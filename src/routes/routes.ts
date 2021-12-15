import { lazy } from "react";
import { Route } from "../models/Route";
import { About, Customer, Home } from "../DashBoard/pages";
import {
  FormikBasicPage,
  FormikAbstractions,
  FormikComponentPage,
  FormikYupPage,
  RegisterScreen,
} from "../auth/pages";
import { RegisterFormikScreen } from "../auth/pages/RegisterFormikScreen";

export const ProductScreen = lazy(
  () =>
    import(
      /*webpackChunkName:"DashBoard"*/ "../components-bounds/pages/ProductScreen"
    )
);

export const routes: Route[] = [
  {
    path: "/register",
    Component: RegisterScreen,
    name: "Register Screen",
  },
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
  {
    path: "/formik",
    Component: FormikBasicPage,
    name: "Formik Basic Page",
  },
  {
    path: "/formik-yup",
    Component: FormikYupPage,
    name: "Formik Yup Page",
  },
  {
    path: "/formik-components",
    Component: FormikComponentPage,
    name: "Formik Component Page",
  },
  {
    path: "/formik-abstractions",
    Component: FormikAbstractions,
    name: "Formik Abstractions",
  },
  {
    path: "/registro-formik",
    Component: RegisterFormikScreen,
    name: "Register con formik",
  },
];
