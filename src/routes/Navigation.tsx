import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import { routes } from "../DashBoard/routes";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ path, name }, i) => (
              <li key={i}>
                <NavLink to={path} activeClassName="nav-active" exact>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {routes.map(({ Component, path }, index) => (
            <Route key={index} path={path} render={Component} exact />
          ))}

          <Redirect to={routes[0].path} />
        </Switch>
      </div>
    </Router>
  );
};
