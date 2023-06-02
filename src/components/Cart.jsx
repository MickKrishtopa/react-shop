export default function Cart(props) {
  const { quantity = 0, toggleBasketOpen } = props;

  return (
    <div className="cart blue darken-4 white-text" onClick={toggleBasketOpen}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
