import { LazyExoticComponent } from "react";
type JSXElement = () => JSX.Element;

export interface Route {
  path: string;
  children?: [];
  name: string;
  Component: LazyExoticComponent<JSXElement> | JSXElement;
}
