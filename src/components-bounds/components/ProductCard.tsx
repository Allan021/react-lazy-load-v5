import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import {
  onChangeArgs,
  ProductCardProps,
  products,
} from "../interfaces/productInterfaces";

export const ProductCardContext = createContext({} as ProductCardProps);
const ProductProvider = ProductCardContext.Provider;

export interface Props {
  product: products;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
//llamar al hook en la rama principal
export const ProductCard = ({
  product,
  children,
  className,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({ product, onChange, value });
  return (
    <ProductProvider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`}>
        {/* <ProductImage img={"./coffee-mug.png"} />
        <ProductTitle title={product.title} />
        <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
        {children}
      </div>
    </ProductProvider>
  );
};
