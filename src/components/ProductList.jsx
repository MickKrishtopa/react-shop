import Product from './Product';
import React from 'react';

export default function ProductList(props) {
  const { productList = [], addToBasket } = props;

  if (!productList.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <main className="goods">
      {productList.map((product) => (
        <Product key={product.mainId} {...product} addToBasket={addToBasket} />
      ))}
    </main>
  );
}
