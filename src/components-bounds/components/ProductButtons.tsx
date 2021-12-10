import { useCallback, useContext } from "react";
import { ProductCardContext } from "../contexts/ProductCardContext";

import styles from "../styles/styles.module.css";
export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductCardContext);

  const isMaxReached = useCallback(
    () => !!maxCount && maxCount === counter,
    [counter, maxCount]
  );

  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button
        className={styles.buttonMinus}
        disabled={counter === 0}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}> {counter}</div>
      <button
        disabled={isMaxReached()}
        className={`${styles.buttonAdd} ${isMaxReached() && "disabled"}`}
        onClick={() => increaseBy(1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};
