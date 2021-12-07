import { useState } from "react";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { onChangeArgs, ProductInCart } from "../interfaces/productInterfaces";
import "../styles/styles.css";
export const productDummy = {
  id: "1",
  img: "./coffee-mug.png",
  title: "Mi Taza de Cafe",
};

export const products = [
  {
    id: "1",
    img: "./coffee-mug.png",
    title: "Mi Taza de Cafe",
  },
  {
    id: "2",
    img: "./coffee-mug2.png",
    title: "Taza de cafe con Memes",
  },
];

export const ProductScreen = () => {
  //aca manejare el estado de mis productos
  //lo que digo con estos [], es que sera un objeto con un chingo de propiedades de tipo string que al ir agregando elementos se iran incrementando las propiedades
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
          >
            <ProductImage />
            <ProductTitle className="text-white" />
            <ProductButtons className={"buttons"} />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard product={productDummy} className="bg-dark mini-cart">
          <ProductImage />
          <ProductButtons className={"buttons"} />
        </ProductCard>
        <ProductCard
          product={{
            id: "2",
            img: "./coffee-mug2.png",
            title: "Taza de cafe con Memes",
          }}
          className="mini-cart"
        >
          <ProductCard.Image />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
      {JSON.stringify(shoppingCart)}
    </div>
  );
};

export default ProductScreen;
