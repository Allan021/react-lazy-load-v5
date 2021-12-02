import { BrowserRouter as Router } from "react-router-dom";

import { routes } from "../DashBoard/routes";

import { Menu } from "../utils/components/Menu";
import { MainRoutes } from "./MainRoutes";
export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <Menu routes={routes} fondo={true} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <MainRoutes />
      </div>
    </Router>
  );
};
