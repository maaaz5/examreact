import { ADDLIVRE, REMOVELIVRE } from "./panierType";

export const addToPanier = (item) => {
  return {
    type: ADDLIVRE,
    payload: item,
  };
};

export const removeFromPanier = (id) => {
  return {
    type: REMOVELIVRE,
    payload: id,
  };
};
