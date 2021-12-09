import { useEffect, useState } from "react";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { useGetProducts } from "../hooks/useGetProducts";
import {
  onChangeArgs,
  ProductInCart,
  products,
} from "../interfaces/productInterfaces";
import "../styles/styles.css";

export const ProductScreen = () => {
  //aca manejare el estado de mis productos
  const [products, setProducts] = useState<products[]>([]);
  //lo que digo con estos [], es que sera un objeto con un chingo de propiedades de tipo string que al ir agregando elementos se iran incrementando las propiedades

  useEffect(() => {
    fetch("../data/products.json")
      .then((resp) => resp.json())
      .then((body) => {
        console.log(body.data);
      });
  }, []);

  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleShoppingCart = ({ product, counter }: onChangeArgs) => {
    setShoppingCart((oldShopingInCart) => {
      if (counter <= 0) {
        const { [product.id]: ElementToDelete, ...rest } = oldShopingInCart;
        return rest;
      }

      return { ...oldShopingInCart, [product.id]: { ...product, counter } };
    });
  };

  return (
    <div>
      <h1>Seccion de Productos</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={handleShoppingCart}
            value={shoppingCart[product.id]?.counter || 0}
          >
            <ProductImage />
            <ProductTitle className="text-white" />
            <ProductButtons className={"buttons"} />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, productInCart]) => (
          <ProductCard
            key={key}
            product={productInCart}
            className="mini-cart bg-dark"
            value={productInCart.counter}
          >
            <ProductImage />
            <ProductButtons className={"buttons"} />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductScreen;
