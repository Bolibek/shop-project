import React from 'react'

export default function Card(props) {
  const {quantity= 0, handleBasketShow = Function.prototype}= props;
  return (
    <div onClick={handleBasketShow} className="cart blue darken-4 white-text">
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="card-quantity">{" " + quantity}</span> : null}
    </div>
  )
}
