import { useContext } from 'react';
import { ShopContext } from '../context';

export default function BasketItem(props) {
  const { id, name, price, quantity } = props;

  const { changeQuantity, removeFromBasket } = useContext(ShopContext);

  return (
    <li className='collection-item '>
      {name} ({price} руб.){' '}
      <i
        className='material-icons basket-change-quantity'
        onClick={() => changeQuantity(id)}
      >
        remove
      </i>
      {quantity} шт.{' '}
      <i
        className='material-icons basket-change-quantity'
        onClick={() => changeQuantity(id, 'plus')}
      >
        add
      </i>{' '}
      = {+price * quantity} руб.
      <span className='secondary-content'>
        <i
          className='material-icons basket-delete'
          onClick={() => removeFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}
