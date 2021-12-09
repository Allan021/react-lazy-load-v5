import { useCallback, useEffect, useRef, useState } from "react";
import { onChangeArgs, products } from "../interfaces/productInterfaces";

interface UseProductProps {
  product: products;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: UseProductProps) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = useCallback(
    (value: number) => {
      //si el card esta siendo controlado entoces lo actualizo asi y si no lo actualizo de otra manera
      if (isControlled.current) {
        return onChange!({ product, counter: value });
      }

      const newValue = Math.max(counter + value, 0);

      setCounter(newValue);
    },
    [onChange, product, counter]
  );

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
