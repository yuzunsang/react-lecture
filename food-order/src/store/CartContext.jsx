import { createContext, useReducer } from "react";

const CartContext = createContext({
  item: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

// 업데이트된 상태를 반환
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(() => {
      (item) => item.id === action.item.id;
    });

    if (existingCartItemIndex > -1) {
    } else {
    }
  }

  if (action.type === "REMOVE_ITEM") {
    // ...remove item from state
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
