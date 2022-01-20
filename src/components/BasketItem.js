import React from "react";

export default function BasketItem(props) {
	const { id, name, price, quantity, incrementQuantity, decrementQuantity } =
		props;
	return (
		<li className="collection-item">
			{name} x{quantity} = {price * quantity}
			<b>$</b>
			<span
				className="secondary-content"
				
			>
				<a href="#" class="waves-effects btn" onClick={()=> incrementQuantity(id)}>
					<i class="material-icons left">exposure_plus_1</i>add
				</a>
				<a href="#" class="waves-effects btn" onClick={()=> decrementQuantity(id)}>
					<i class="material-icons right">exposure_minus_1</i>remove
				</a>
				<a href="#" class="waves-effects btn" onClick={() => props.removeFromBasket(id)} >
					<i className="material-icons basket-delete">delete_forever</i>
				</a>

			</span>
		</li>
	);
}
