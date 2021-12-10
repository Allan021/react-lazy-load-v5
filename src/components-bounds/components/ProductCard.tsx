import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";

import {
  initialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
} from "../interfaces/productInterfaces";
import { ProductProvider } from "../contexts/ProductCardContext";
export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: initialValues;
}
//llamar al hook en la rama principal
export const ProductCard = ({
  product,
  children,
  className,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, reset, isMaxReached, maxCount } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });
  return (
    <ProductProvider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
        isMaxCountReached: isMaxReached,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>
        {/* <ProductImage img={"./coffee-mug.png"} />
        <ProductTitle title={product.title} />
        <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
        {children({
          count: counter,
          isMaxCountReached: isMaxReached, //AQUI ES PORQUE OCUPO EL BOOLEANO
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </ProductProvider>
  );
};
