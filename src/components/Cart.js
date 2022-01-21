import {useContext} from 'react';
import { shopContext } from "../context";

export default function Card() {
  const {order, handleBasketShow = Function.prototype}= useContext(shopContext);
  const quantity = order.length;
  return (
    <div onClick={handleBasketShow} className="cart blue darken-4 white-text">
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="card-quantity">{" " + quantity}</span> : null}
    </div>
  )
}
