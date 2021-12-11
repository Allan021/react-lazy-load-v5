import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { useGetProducts } from "../hooks/useGetProducts";
import "../styles/styles.css";

export const ProductScreen = () => {
  const { products } = useGetProducts("../data/products.json");
  const myProduct = products[0];

  return (
    <div>
      <h1>Seccion de Productos</h1>

      {myProduct && (
        <ProductCard
          key={myProduct.id}
          product={myProduct}
          initialValues={{ counter: 4, maxCount: 10 }}
          className="bg-dark"
        >
          {({ reset, isMaxCountReached, increaseBy }) => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,.2)" }}
              />
              <ProductTitle className="text-white" />
              <ProductButtons className={"buttons"} />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}> -2 </button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}> +2 </button>
              )}
            </>
          )}
        </ProductCard>
      )}
    </div>
  );
};

export default ProductScreen;
