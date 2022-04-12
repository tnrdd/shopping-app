import { Product } from "./product";

enum ActionKind {
  ADD = "ADD",
  SUB = "SUB",
  REMOVE = "REMOVE",
}

export interface State {
  cart: Product[];
}

export interface Action {
  type: ActionKind;
  product: Product;
}
