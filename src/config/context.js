import { createContext, useReducer } from "react";
import {Reducer} from "./reducer";
const initialState = {
  goods: [],
  loading: true,
  orders: [],
  isBasketShow: false,
}

const CartContext = createContext(initialState);

const CartContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(Reducer, initialState);
  value.setGoods = (goods) => dispatch({ type: "SET_GOODS", payload: goods });
  value.setLoading = (loading) => dispatch({ type: "SET_LOADING", payload: loading });
  value.setOrders = (orders) => dispatch({ type: "SET_ORDERS", payload: orders });
  value.setBasketShow = (isBasketShow) => dispatch({ type: "SET_BASKET_SHOW", payload: isBasketShow });
  value.addToOrder = (addedOrder) => dispatch({ type: "ADD_TO_ORDER", payload: addedOrder });
  value.removeFromOrder = (itemId) => dispatch({ type: "REMOVE_FROM_ORDER", payload: itemId });
  value.incrementQuantity = (itemId) => dispatch({ type: "INCREMENT_QUANTITY", payload: itemId });
  value.decrementQuantity = (itemId) => dispatch({ type: "DECREMENT_QUANTITY", payload: itemId });
  value.handleBasketShow = () => dispatch({ type: "HANDLE_BASKET_SHOW" });
  

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };