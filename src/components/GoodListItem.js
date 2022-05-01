import {useContext} from 'react'
import {CartContext} from '../config/context'
export default function GoodListItem(props) {
  const {addToOrder} = useContext(CartContext)
  const {newDisplayAsset, devName, finalPrice, items} = props;
  const {id} = newDisplayAsset;
  return (
    <div className='border-2 border-solid border-blue-600 card'>
      <div className="w-50" id={newDisplayAsset.id}>
        <div className="w-20">
          <img className='poster-img' src={items[0].images.featured? items[0].images.featured : "https://fortnite-api.com/images/vbuck.png"} alt={devName} />
          <span className="card-title">{devName.slice(12)}</span>
        </div>
        <div className="card-content">
          <p>{items.map(item => item.description + " ")}</p>
        </div>
        <div className="card-action">
          <button className="buy-btn" onClick={() => addToOrder({id, devName, finalPrice})}>Buy</button>
          <span className="right" style={{fontSize: "1.8rem"}}>{finalPrice}$</span>
        </div>
      </div>
    </div>
  )
}
