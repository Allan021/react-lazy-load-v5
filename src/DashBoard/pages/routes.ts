import { About, Customer, Home } from ".";
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
];
