import { About, Customer, Home } from ".";
import { ProductScreen } from "../../components-bounds/pages/ProductScreen";
import { Route } from "../../models/Route";

export const DashBoardRoutes: Route[] = [
  {
    path: "customer",
    Component: Customer,
    name: "Customers Screen",
  },
  {
    path: "about",
    Component: About,
    name: "About Screen",
  },
  {
    path: "home",
    Component: Home,
    name: "Home Screen",
  },
  {
    path: "products",
    Component: ProductScreen,
    name: "Products Screen",
  },
];
