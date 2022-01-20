import React from "react";
import GoodItem from "./GoodItem";

export default function GoodList(props) {
	const { goods = [], addToBasket } = props;
	if (!goods.length) {
		return (<h3>Nothing Found</h3>)
	} else {
		return (
			<div className="goods">
				{goods.map((item) => (
					<GoodItem addToBasket={addToBasket} key={item.id} {...item} />
        ))}
			</div>
		);
	}
}
