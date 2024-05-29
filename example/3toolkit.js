import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");
// jika ingin membuat initial state
// const initialState = {
//     cart: [],
// }

// membuat reducer atau fungsi seperti untuk mutate
const cartReducer = createReducer([], (builder) => {
  //   builder.addCase("ADD_TO_CART", (state, action) => { // berguna jika tidak pakai createAction
  builder.addCase(addToCart, (state, action) => {
    // state.cart.push(action.payload); // menggunakan 1 reducer
    state.push(action.payload); // multiple reducer // initial state array 0
  });
});

const login = createAction("CREATE_SESSION");
// buat reducer baru
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = action.payload.status;
  });
});

const store = configureStore({
  // reducer: cartReducer // jika ingin membuat 1 reducer dengan initial state
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("onCreate store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// const action1 = { type: "ADD_TO_CART", payload: { id: 10, qty: 5} }
// const action1 = addToCart({ id: 10, qty: 5});
// store.dispatch(action1);

// buat sebaris
store.dispatch(addToCart({ id: 10, qty: 5 }));
store.dispatch(addToCart({ id: 20, qty: 55 }));
store.dispatch(login({ status: true }));
