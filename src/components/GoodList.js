import {useEffect, useContext} from 'react'
import { API_KEY, API_URL } from '../config/config'
import {CartContext} from '../config/context'
import GoodListItem from './GoodListItem'
import Loader from './Loader'
export default function GoodList() {
  const {goods, loading, setGoods, setLoading} = useContext(CartContext)
  useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorisation: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((goods) => {
				goods.data.featured.entries && setGoods(goods.data.featured.entries);
				console.log(goods.data.featured.entries);
				setLoading(false);
			});
	}, []);
  return (
    <div className='flex goods'>
      {loading ? <Loader /> : goods.map(good => <GoodListItem key={good.newDisplayAsset.id} {...good}/>) }
    </div>
  )
}
