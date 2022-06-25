import { createStore, combineReducers } from "redux";
import userReducer from "./user";
import itemsReducer from "./items";

const allReducers = combineReducers({ user: userReducer, items: itemsReducer });

export default function configureStore() {
    const store = createStore(
        allReducers, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;    
};