import { BrowserRouter as Router } from "react-router-dom";

import { routes } from "./routes";

import { Menu } from "../utils/components/Menu";
import { MainRoutes } from "./MainRoutes";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <Menu routes={routes} fondo={false} logo={logo} normalLinks={false} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <MainRoutes />
      </div>
    </Router>
  );
};
