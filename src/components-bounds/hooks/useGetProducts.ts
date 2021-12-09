import { useEffect, useState } from "react";
import { products } from "../interfaces/productInterfaces";

export const useGetProducts = (url: string) => {
  const [products, setProducts] = useState<products[]>([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json() as Promise<products[]>)
      .then(setProducts);
  }, [url]);

  return { products };
};
