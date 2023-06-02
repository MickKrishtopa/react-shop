import BasketItem from './BasketItem';

export default function BasketList(props) {
  const {
    order = [],
    toggleBasketOpen,
    removeFromBasket,
    changeQuantity,
  } = props;
  const summaryCost = order.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0
  );
  const onSubmit = () => {
    alert('Спасибо за заказ!');
  };

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            changeQuantity={changeQuantity}
          />
        ))
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {summaryCost} руб.
      </li>
      <li className="collection-item active">
        <button className=" btn" onClick={onSubmit}>
          Оформить заказ
        </button>
      </li>
      <i className="material-icons basket-close" onClick={toggleBasketOpen}>
        close
      </i>
    </ul>
  );
}
