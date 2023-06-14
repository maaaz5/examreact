import { ADDLIVRE, REMOVELIVRE } from "./panierType";

const initialState = {
  panier: [],
};

export const panierReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDLIVRE:
      const item = action.payload;
      const existedItem = state.panier.filter(
        (item) => item.id == action.payload.id
      );
      console.log(existedItem);

      if (existedItem.length !== 0) {
        const updateItems = state.panier.filter(
          (item) => item.id != action.payload.id
        );
        if (!item.qty) {
          item.qty = 0;
        }
        return {
          ...state,
          panier: [
            ...updateItems,
            { ...item, qty: Number(existedItem[0].qty) + 1 },
          ],
        };
      } else {
        return {
          ...state,
          panier: [...state.panier, item],
        };
      }

    case REMOVELIVRE:
      return {
        ...state,
        panier: state.panier.filter((item) => item.id != action.payload),
      };

    default:
      return state;
  }
};
