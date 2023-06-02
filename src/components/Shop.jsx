import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import ProductList from './ProductList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

export default function Shop(props) {
  const [productList, setProductList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketOpen, seIsBasketOpen] = useState(false);
  const [alertName, setAlertName] = useState('');

  const toggleBasketOpen = () => {
    seIsBasketOpen(!isBasketOpen);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  const changeQuantity = (id, type) => {
    setOrder((order) =>
      order.map((el) => {
        if (el.id === id) {
          if (type === 'plus') {
            return { ...el, quantity: el.quantity + 1 };
          } else {
            if (el.quantity > 0) {
              return { ...el, quantity: el.quantity - 1 };
            } else {
              return { ...el, quantity: 0 };
            }
          }
        } else {
          return el;
        }
      })
    );
  };

  const removeFromBasket = (id) => {
    setOrder((order) => order.filter((el) => el.id !== id));
  };

  const addToBasket = (item) => {
    setAlertName(item.name);
    const itemIndex = order.findIndex((product) => product.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([newItem, ...order]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  useEffect(function getProductList() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        res.shop && setProductList(res.shop);
      })
      .catch((err) => console.log('ОШИБКА', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} toggleBasketOpen={toggleBasketOpen} />
      {loading ? (
        <Preloader />
      ) : (
        <ProductList productList={productList} addToBasket={addToBasket} />
      )}

      {isBasketOpen && (
        <BasketList
          order={order}
          toggleBasketOpen={toggleBasketOpen}
          removeFromBasket={removeFromBasket}
          changeQuantity={changeQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}
