import { NavLink } from "react-router-dom";
import { Route } from "../../DashBoard/routes";

type Props = {
  routes: Route[];
  fondo?: boolean;
};

export const Menu: React.FC<Props> = ({ fondo, routes }) => {
  return (
    <nav className={fondo ? "navigation" : ""}>
      <ul>
        {routes.map(({ path, name }) => (
          <li key={path}>
            <NavLink to={path} activeClassName="nav-active">
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
