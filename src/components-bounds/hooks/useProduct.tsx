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
  const [counter, setCounter] = useState(0);
  const isControlled = useRef(!!onChange);
  const increaseBy = useCallback(
    (value: number) => {
      if (isControlled.current) {
        onChange!({ product, counter: value });
      }

      const newValue = Math.max(counter + value, 0);

      setCounter(newValue);

      onChange && onChange({ product, counter: newValue }); //estos son los argumentos que le mando al onChange
    },
    [counter, onChange, product]
  );

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
