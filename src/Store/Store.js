import { createStore, combineReducers } from "redux";
import products from "./products.reducer.";
import cart from "./carts.reducer";
import user from "./user.reducer";

const allSection = combineReducers({ products, cart, user });
const store = createStore(allSection);
export default store;
