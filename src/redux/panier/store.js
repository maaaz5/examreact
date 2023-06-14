import { createStore } from "redux";
import { panierReducer } from "./panierReducer";

export const store = createStore(panierReducer);
