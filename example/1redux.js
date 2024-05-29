// reducer

import { createStore } from "redux";

const cartReducer = (
  state = {
    login: false,
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(cartReducer);
console.log("onCreate store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 1, qty: 20 } };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 10, qty: 5 } };
store.dispatch(action2);

// run : node redux
