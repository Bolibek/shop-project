import {useContext} from 'react'
import {CartContext} from '../config/context'
export default function BasketListItem(props) {
	const {removeFromOrder, incrementQuantity, decrementQuantity} = useContext(CartContext)
  const { id, devName, finalPrice, quantity } = props;
  return (
    <div className=''>
      <li className="collection-item">
			{`${devName.slice(12)} x${quantity} = ${finalPrice * quantity} $`}
			<span
				className="secondary-content"
				
			>
				<span href="#" className="waves-effects btn" onClick={()=> incrementQuantity(id)}>
					<i class="material-icons left">exposure_plus_1</i>add
				</span>
				<span href="#" className="waves-effects btn" onClick={()=> decrementQuantity(id)}>
					<i class="material-icons right">exposure_minus_1</i>remove
				</span>
				<span href="#" className="waves-effects btn delete-order" onClick={() => removeFromOrder(id)} >
					<i className="material-icons">delete_forever</i>
				</span>

			</span>
		</li>
    </div>
  )
}
