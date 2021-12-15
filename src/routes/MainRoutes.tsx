import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { routes } from "./routes";

export const MainRoutes = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Switch>
        {routes.map(({ Component, path }, index) => (
          <Route key={index} path={path} exact render={() => <Component />} />
        ))}

        <Redirect to={routes[0].path} />
      </Switch>
    </Suspense>
  );
};
