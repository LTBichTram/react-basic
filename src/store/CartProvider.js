import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  let updateItems = [...state.items];
  let totalAmount = state.totalAmount;
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = updateItems.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = updateItems[existingItemIndex];
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updateItems[existingItemIndex] = updateItem;
    } else updateItems = updateItems.concat(action.item);
    totalAmount += action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalAmount: +totalAmount.toFixed(2),
    };
  } else if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = updateItems.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = updateItems[existingItemIndex];
    if (existingItem.amount === 1) {
      updateItems = updateItems.filter((item) => item.id !== existingItem.id);
    } else {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updateItems[existingItemIndex] = updateItem;
    }
    totalAmount -= existingItem.price;
    return {
      items: updateItems,
      totalAmount: +totalAmount.toFixed(2),
    };
  }
  return defaultCart;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, defaultCart);
  const addCartHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };
  const removeCartHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartHandler,
    removeItem: removeCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
