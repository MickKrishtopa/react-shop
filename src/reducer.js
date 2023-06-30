export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        productList: payload || [],
        loading: false,
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };

    case 'TOGGLE_BASKET_OPEN':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case 'ADD_TO_BASKET':
      console.log('STATE', state);
      const itemIndex = state.order.findIndex(
        (product) => product.id === payload.id
      );

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };

    case 'CHANGE_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            if (payload.type === 'plus') {
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
        }),
      };

    default:
      return state;
  }
}
