import React, { act, useEffect, useReducer, useRef } from "react";

const initialState = {
  input: {
    username: "",
    email: "",
    password: "",
  },
  Icon: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Input":
      return {
        ...state,
        input: {
          ...state.input,
          [action.field]: action.value,
        },
      };
    case "Reset":
      return {
        ...state,
        input: initialState.input,
      };
    case "showIcon":
      return { ...state, Icon: action.payload };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const InputRef = useRef(null);

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  const handleInput = (e) => {
    dispatch({ type: "Input", field: e.target.name, value: e.target.value });
  };

  return (
    <div>
      <h1>useReducer Hook</h1>

      <form
        className="flex flex-col gap-10 w-[50%] mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state.input);
          dispatch({ type: "Reset" });
          InputRef.current.focus();
        }}
      >
        <input
          onChange={handleInput}
          className="cursor-pointer border px-5 py-3 rounded-md "
          placeholder="Username..."
          type="text"
          name="username"
          id=""
          ref={InputRef}
          value={state.input.username}
        />
        <input
          onChange={handleInput}
          className="cursor-pointer border px-5 py-3 rounded-md "
          placeholder="Email..."
          type="text"
          name="email"
          id=""
          value={state.input.email}
        />
        <div className="w-full relative">
          <input
            onChange={handleInput}
            className="cursor-pointer border px-5 py-3 w-full rounded-md "
            placeholder="Password..."
            type={`${state.Icon ? "text" : "password"}`}
            name="password"
            id=""
            value={state.input.password}
          />

          <span
            className="absolute top-[10px] right-[10px]"
            onClick={() => dispatch({ type: "showIcon", payload: !state.Icon })}
          >
            {state.Icon ? "🙈" : "👁"}
          </span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ReducerHook;
