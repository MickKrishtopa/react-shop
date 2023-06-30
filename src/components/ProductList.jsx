import Product from './Product';
import React from 'react';

import { useContext } from 'react';
import { ShopContext } from '../context';

export default function ProductList() {
  const { productList = [] } = useContext(ShopContext);

  if (!productList.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <main className='goods'>
      {productList.map((product) => (
        <Product key={product.mainId} {...product} />
      ))}
    </main>
  );
}
