import React, { useReducer } from "react";
import Image from "../../assets/image.jpeg";
import Image2 from "../../assets/edit.jpeg";

const initialState = {
  count: 0,
  image: Image,
  bol: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
      break;
    case "Image":
      return { ...state, image: action.payload };
      break;
    case "Bool":
      return { ...state, bol: action.payload };
      break;

    default:
      return state;
      break;
  }
};

const RefHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col h-screen">
      <h1>Counter App Using UseReducer</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Hello World
      </button>
      <div className="h-[400px]">
        <img src={state.image} width={400} alt="" />
        <button onClick={() => dispatch({ type: "Image", payload: Image2 })}>
          Change Image
        </button>
        <button onClick={() => dispatch({ type: "Image", payload: Image })}>
          Change Image
        </button>
      </div>

      <div className="">{state.count > 0 && <span>Hello World</span>}</div>
    </div>
  );
};

export default RefHook;
