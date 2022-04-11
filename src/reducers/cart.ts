import { useReducer } from "react";

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (!state.some((product) => product.id === action.product.id)) {
        action.product.quantity = 1;
        return state.concat(action.product);
      }
      return state.map((product) => {
        if (product.id === action.product.id) {
          product.quantity++;
        }
        return product;
      });
    case "SUB":
      const product = state.find((product) => product.id === action.id);
      if (product && product.quantity > 1) {
        return state.map((product) => {
          if (product.id === action.id) {
            product.quantity--;
          }
          return product;
        });
      } else {
        return state.filter((product) => product.id !== action.id);
      }
    case "REMOVE":
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
}
