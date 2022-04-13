import { Product } from "./product";

enum ActionKind {
  ADD = "ADD",
  SUB = "SUB",
  REMOVE = "REMOVE",
}

export type State = Product[];

export interface Action {
  type: ActionKind;
  product: Product;
}
