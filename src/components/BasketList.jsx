import BasketItem from './BasketItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

export default function BasketList() {
  const { order, toggleBasketOpen } = useContext(ShopContext);

  const summaryCost = order.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0
  );
  const onSubmit = () => {
    alert('Спасибо за заказ!');
  };

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className='collection-item '>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: {summaryCost} руб.
      </li>
      <li className='collection-item active'>
        <button className=' btn' onClick={onSubmit}>
          Оформить заказ
        </button>
      </li>
      <i className='material-icons basket-close' onClick={toggleBasketOpen}>
        close
      </i>
    </ul>
  );
}
