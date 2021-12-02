import { Route } from "../models/Route";

export const generateNestedRoutes = (prefixRoute: string, routes: Route[]) =>
  routes.map((route) => ({
    ...route,
    path: `${prefixRoute}/${route.path}`,
  }));
