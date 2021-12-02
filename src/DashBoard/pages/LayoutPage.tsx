import { useMemo } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { About, Customer } from ".";
import { Menu } from "../../utils/components/Menu";
import { generateNestedRoutes } from "../../utils/generateNestedRoutes";
import { DashBoardRoutes } from "./routes";

export const LayoutPage = () => {
  const { path, url } = useRouteMatch(); //el path hace referencia a la ruta relativa y el url la ruta absoluta
  console.log(path, url);
  const menuRoutes = useMemo(
    () => generateNestedRoutes(url, DashBoardRoutes),
    [url]
  );
  const currentRoutes = useMemo(
    () => generateNestedRoutes(path, DashBoardRoutes),
    [path]
  );

  return (
    <div>
      <h2>Router del DashBoard de mi App</h2>
      <Menu fondo={true} logo={""} routes={menuRoutes} normalLinks={true} />
    </div>
  );
};

export default LayoutPage;
