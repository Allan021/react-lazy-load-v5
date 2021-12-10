import { useCallback, useEffect, useRef, useState } from "react";
import {
  initialValues,
  onChangeArgs,
  Product,
} from "../interfaces/productInterfaces";

interface UseProductProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: initialValues;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: UseProductProps) => {
  const [counter, setCounter] = useState(initialValues?.counter || value);

  const isControlled = useRef(!!onChange);

  const isMounted = useRef(false);

  const increaseBy = useCallback(
    (value: number) => {
      //si el card esta siendo controlado entoces lo actualizo asi y si no lo actualizo de otra manera
      if (isControlled.current) {
        return onChange!({ product, counter: value });
      }

      let newValue = Math.max(counter + value, 0);

      if (initialValues?.maxCount) {
        newValue = Math.min(newValue, initialValues?.maxCount);
      }

      setCounter(newValue);
    },
    [counter, initialValues?.maxCount, onChange, product]
  );

  const reset = () => {
    setCounter(initialValues?.counter || value);
  };

  useEffect(() => {
    if (isMounted.current) {
      setCounter(value);
    }
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    reset,
    isMaxReached:
      !!initialValues?.maxCount && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
  };
  //Acordate que todas las funciones logicas iran en los hooks por eso yo defino esto aqui
};
