import React, { useContext } from "react";
import { products } from "../Constants/Products";
import { ProductContext } from "../Contexts/ProductContext";

const Home = () => {
  const { cart, product, AddToCart } = useContext(ProductContext);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 m-4 text-white">
        {products.map((prod) => (
          <div key={prod.id} className=" border p-3 rounded-md bg-blue-800">
            <h1 className="">{prod.name}</h1>
            <h1 className="">{prod.price}</h1>
            <h1 className="">{prod.category}</h1>
            <h1 className="">{prod.inStock}</h1>
            <button onClick={() => AddToCart(prod)}> Add To Cart </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
