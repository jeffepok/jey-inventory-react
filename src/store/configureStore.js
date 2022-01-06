import { createStore, combineReducers } from "redux";
import authReducer from "./auth";
import itemsReducer from "./items";

const allReducers = combineReducers({ auth: authReducer, items: itemsReducer });

export default function configureStore() {
    const store = createStore(
        allReducers, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;    
};