import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

const About = () => {
  const { cart } = useContext(ProductContext);
  return (
    <div className="">
      {cart.map((prod) => (
        <div className="">
          <h1 className="">{prod.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default About;
