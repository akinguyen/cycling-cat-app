// Provider.js
import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
export const Context = createContext();

// look here
const initialState = {
  userData: null,
  isSignedIn: false,
  participations: 0,
};

export default function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
}
