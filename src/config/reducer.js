import { useContext } from "react";
import { CartContext } from "./context";

export const Reducer = (state, { type, payload }) => {
	const { setGoods, setLoading, setOrders, setBasketShow } =
		useContext(CartContext);
	switch (type) {
		case "SET_GOODS":
			return { ...state, goods: payload };
		case "SET_LOADING":
			return { ...state, loading: payload };
		case "SET_ORDERS":
			return { ...state, orders: payload };
		case "SET_BASKET_SHOW":
			return { ...state, isBasketShow: payload };
		case "ADD_TO_ORDER":
			const orderIndex = state.orders.findIndex(
				(order) => order.id === payload.id
			);
			if (orderIndex < 0) {
				return {
					...state,
					orders: [...state.orders, { ...payload, quantity: 1 }],
				};
			} else {
				const updatedOrder = state.orders.map((orderItem, index) => {
					if (orderIndex === index) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1,
						};
					}
					return orderItem;
				});
				return { ...state, orders: updatedOrder };
			}

		case "REMOVE_FROM_ORDER":
			return {
				...state,
				orders: state.orders.filter((item) => item.id !== payload),
			};
		case "INCREMENT_QUANTITY":
			return {
				...state,
				orders: state.orders.map((item) =>
					item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
				),
			};
		case "DECREMENT_QUANTITY":
			return {
				...state,
				orders: state.orders.map((item) =>
					item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
				),
			};
		case "HANDLE_BASKET_SHOW":
			return { ...state, isBasketShow: !state.isBasketShow };
		default:
			return state;
	}
};
