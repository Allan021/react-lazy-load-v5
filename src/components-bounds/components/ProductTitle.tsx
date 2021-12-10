import { useContext } from "react";
import { ProductCardContext } from "../contexts/ProductCardContext";
import styles from "../styles/styles.module.css";
export interface Props {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}
export const ProductTitle = ({ title = "", className = "", style }: Props) => {
  const { product } = useContext(ProductCardContext);
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {product.title || title}
    </span>
  );
};
