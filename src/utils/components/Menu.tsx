import { Link, NavLink } from "react-router-dom";
import { Route } from "../../models/Route";

type Props = {
  routes: Route[];
  fondo?: boolean;
  logo?: string;
  normalLinks: boolean;
};

export const Menu: React.FC<Props> = ({ fondo, routes, logo, normalLinks }) => {
  return !normalLinks ? (
    <nav className={fondo ? "navigation" : "grasa"}>
      {logo && <img src={logo} alt="imagen de React" />}
      <ul>
        {routes.map(({ path, name }) => (
          <li key={path}>
            {normalLinks ? (
              <Link to={path}>{name}</Link>
            ) : (
              <NavLink to={path} activeClassName="nav-active">
                {name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <ul>
      {routes.map(({ path, name }) => (
        <li key={path}>
          {normalLinks ? (
            <Link to={path}>{name}</Link>
          ) : (
            <NavLink to={path} activeClassName="nav-active">
              {name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};
