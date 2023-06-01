import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import ProductList from './ProductList';

export default function Shop(props) {
  const [productList, setProductList] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return loading ? <Preloader /> : <ProductList productList={productList} />;
}
