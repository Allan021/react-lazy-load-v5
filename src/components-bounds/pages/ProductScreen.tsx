import { useState } from "react";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { useGetProducts } from "../hooks/useGetProducts";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/styles.css";

export const ProductScreen = () => {
  const { products } = useGetProducts("../data/products.json");
  const { shoppingCart, handleShoppingCart } = useShoppingCart();

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
            onChange={handleShoppingCart}
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
