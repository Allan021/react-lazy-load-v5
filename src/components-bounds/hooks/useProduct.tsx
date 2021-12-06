import { useCallback, useState } from "react";
import { onChangeArgs, products } from "../interfaces/productInterfaces";

interface UseProductProps {
  product: products;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ product, onChange }: UseProductProps) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = useCallback(
    (value: number) => {
      const newValue = Math.max(counter + value, 0);

      setCounter(newValue);

      onChange && onChange({ product, counter: newValue }); //estos son los argumentos que le mando al onChange
    },
    [counter, onChange, product]
  );

  return { counter, increaseBy };
};
