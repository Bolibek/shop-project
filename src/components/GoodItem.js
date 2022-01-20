import React from 'react';

export default function GoodItem(props) {
  const {addToBasket, id, name, description, price, full_background} = props;
  return (
    <div>
      <div className="card" id={id}>
        <div className="card-image">
          <img src={full_background} alt={name} />
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className="btn" onClick={()=> addToBasket({id, name, price})}>Buy</button>
          <span className="right" style={{fontSize: "1.8rem"}}>{price}$</span>
        </div>
      </div>
    </div>
  )
}
