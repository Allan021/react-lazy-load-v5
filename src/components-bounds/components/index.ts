import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCard as ProductCardComponentHOC } from "./ProductCard";
import { ProductCardHOC } from "../interfaces/productInterfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

//Patrones avanzados de Components
export const ProductCard: ProductCardHOC = Object.assign(
  ProductCardComponentHOC,
  {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
  }
);
