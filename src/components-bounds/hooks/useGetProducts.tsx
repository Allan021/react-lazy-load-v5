import { useEffect, useState } from "react";
import { products } from "../interfaces/productInterfaces";

export const useGetProducts = (url: string) => {
  const [products, setProducts] = useState<products[]>([]);

  return { products };
};
