import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const AddToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div>
      <ProductContext.Provider value={{ cart, AddToCart }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};
