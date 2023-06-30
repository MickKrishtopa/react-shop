import { useContext } from 'react';
import { ShopContext } from '../context';

export default function Cart() {
  const { order, toggleBasketOpen } = useContext(ShopContext);

  const quantity = order.length;

  return (
    <div className='cart blue darken-4 white-text' onClick={toggleBasketOpen}>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
}
