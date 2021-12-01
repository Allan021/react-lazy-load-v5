import { About, Users, Customer, Home } from "./pages";

interface Route {
  path: string;
  children?: [];
  name: string;
  Component: () => JSX.Element;
}

export const routes: Route[] = [
  {
    path: "/",
    Component: Home,
    name: "Home Screen",
  },
  {
    path: "/about",
    Component: About,
    name: "About Screen",
  },
  {
    path: "/users",
    Component: Users,
    name: "User Screen",
  },
  {
    path: "/customer",
    Component: Customer,
    name: "Customer Screen",
  },
];
