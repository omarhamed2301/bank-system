import accountReducer from "./Store/accountStore/AccountStore";
import customerReducer from "./Store/customerStore/CustomerStore";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer, 
    }
})
// const reducers = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(reducers);

export default store;

