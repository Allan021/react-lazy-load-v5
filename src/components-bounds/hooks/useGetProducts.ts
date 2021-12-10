import { useEffect, useState } from "react";
import { Product } from "../interfaces/productInterfaces";

export const useGetProducts = (url: string) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp?.json() as Promise<Product[]>)
      .then(setProducts);
  }, [url]);

  return { products };
};
