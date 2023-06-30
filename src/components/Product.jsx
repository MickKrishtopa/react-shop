import { ShopContext } from '../context';
import { useContext } from 'react';

export default function Product(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: priceList,
    displayAssets: imageList,
  } = props;

  const { finalPrice: price } = priceList;
  const { background: image } = imageList[0];

  const { addToBasket } = useContext(ShopContext);

  return (
    <>
      <div className='card' id={id}>
        <div className='card-image'>
          <img src={image} alt={name} />
          <span className='card-title'>{name}</span>
        </div>
        <div className='card-content'>
          <p>{description}</p>
        </div>
        <div className='card-action'>
          <button
            onClick={() => addToBasket({ id, name, price })}
            className='btn'
          >
            Купить
          </button>
          <span className='right' style={{ fontSize: '1.8rem' }}>
            {price} руб.
          </span>
        </div>
      </div>
    </>
  );
}
