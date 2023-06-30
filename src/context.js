import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  productList: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
  };

  value.toggleBasketOpen = () => {
    dispatch({ type: 'TOGGLE_BASKET_OPEN' });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.changeQuantity = (id, type) => {
    dispatch({ type: 'CHANGE_QUANTITY', payload: { id, type } });
  };

  value.setProductList = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
