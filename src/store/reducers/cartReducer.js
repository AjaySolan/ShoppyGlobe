const cartReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItem = state.find((item) => item.id === action.payload.id);
        if (existingItem) {
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
      case "REMOVE_FROM_CART":
        return state.filter((item) => item.id !== action.payload);
      case "INCREMENT_QUANTITY":
        return state.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        );
      case "DECREMENT_QUANTITY":
        return state.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        );
      default:
        return state;
    }
  };
  
  export default cartReducer;
  