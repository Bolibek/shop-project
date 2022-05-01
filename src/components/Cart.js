import {useContext} from 'react'
import {CartContext} from '../config/context'
export default function Cart(props) {
  console.log(CartContext)
  const {orders = [], handleBasketShow} = useContext(CartContext)
  const quantity =  orders.length;
  return (
    <div>
      <div onClick={handleBasketShow} className="cart">
        <i className="large material-icons">add_shopping_cart</i>
        {quantity ? <span className="card-quantity">{" " + quantity}</span> : null}
      </div>
    </div>
  )
}
