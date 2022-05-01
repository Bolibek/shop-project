import {useContext} from 'react'
import BasketListItem from './BasketListItem'
import {CartContext} from '../config/context'
export default function BasketList(props) {
	const {orders = [], handleBasketShow} = useContext(CartContext);
	const totalPrice = orders.reduce((sum, el) => {
		return sum + el.finalPrice * el.quantity;
	}, 0);
  return (
    <div className="bsk">
			<ul className="collection basket-list">
				<li className="collection-item active">
					<h4>Basket</h4>
				</li>
				{orders.length ? (
					orders.map((item) => {
						return (
							<BasketListItem
								key={item.id}
								{...item}
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
					onClick={handleBasketShow}
				>
					close
				</i>
			</ul>
		</div>
  )
}
