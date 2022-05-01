import { useContext} from "react";
import { CartContext } from "../config/context";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";
export default function Shop() {
  const { isBasketShow } = useContext(CartContext);
	return (
		<div className="container">
			<Cart />
			<GoodList />
      {isBasketShow && <BasketList/>}
		</div>
	);
}
