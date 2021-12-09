import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/productInterfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});
  const handleShoppingCart = ({ product, counter }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        counter: 0,
      };

      if (Math.max(productInCart.counter + counter, 0) > 0) {
        productInCart.counter += counter;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
    });

    // if( count === 0 ) {
    // const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
    // return rest;
    // }

    // return {
    //     ...oldShoppingCart,
    //     [ product.id ]: { ...product, count }
    // }
  };

  return { shoppingCart, handleShoppingCart };
};
