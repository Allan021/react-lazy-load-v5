import { useContext } from "react";
import { validateImages } from "../utils/validateImage";
import styles from "../styles/styles.module.css";
import { ProductCardContext } from "../contexts/ProductCardContext";

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { img: image } = useContext(ProductCardContext).product;
  useContext(ProductCardContext);
  const imageToShow = validateImages({ image, img });
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imageToShow}
      style={style}
      alt={"Producto"}
    />
  );
};
