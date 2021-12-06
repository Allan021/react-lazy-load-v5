import { ReactElement } from "react";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props } from "../components/ProductCard";

export interface products {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardProps {
  product: products;
  increaseBy: (value: number) => void;
  counter: number;
}

export interface ShoppingCartProps extends products {
  counter: number;
}

export interface ProductCardHOC {
  ({ product, children }: Props): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: products;
  counter?: number;
}
