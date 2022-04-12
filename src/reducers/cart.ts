import { useReducer } from "react";
import {State, Action } from "../types/reducer";

export default function reducer(state:State, action:Action) {
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
      const product = state.find((product) => product.id === action.product.id);
      if (product && product.quantity > 1) {
        return state.map((product) => {
          if (product.id === action.product.id) {
            product.quantity--;
          }
          return product;
        });
      } else {
        return state.filter((product) => product.id !== action.product.id);
      }
    case "REMOVE":
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
}
