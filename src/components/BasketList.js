import React from "react";
import BasketItem from "./BasketItem";
export default function BasketList(props) {
	const { order, incrementQuantity, decrementQuantity } = props;
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
						return (
							<BasketItem
								key={item.id}
								{...item}
								removeFromBasket={props.removeFromBasket}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
							/>
						);
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
					onClick={props.handleBasketShow}
				>
					close
				</i>
			</ul>
		</div>
	);
}
