import { createContext } from "react";
import { ProductContextProps } from "../interfaces/productInterfaces";

export const ProductCardContext = createContext({} as ProductContextProps);
export const ProductProvider = ProductCardContext.Provider;
