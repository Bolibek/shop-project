import { useContext } from "react";
import { shopContext } from "../context";
import BasketItem from "./BasketItem";
export default function BasketList() {
	const { order, handleBasketShow = Function.prototype } =
		useContext(shopContext);
	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity;
	}, 0);

	return (
		<div className="bsk">
			<ul className="collection basket-list">
				<li className="collection-item active">
					<h4>Basket</h4>
				</li>
				{order.length ? (
					order.map((item) => {
						return <BasketItem key={item.id} {...item} />;
					})
				) : (
					<li clasName="collection-item" style={{ padding: "0.7rem" }}>
						Basket is empty
					</li>
				)}
				<li className="collection-item active">
					Total Price: {totalPrice}
					<b>$</b>
				</li>
				<i
					className="material-icons basket-close"
					onClick={handleBasketShow}
				>
					close
				</i>
			</ul>
		</div>
	);
}
