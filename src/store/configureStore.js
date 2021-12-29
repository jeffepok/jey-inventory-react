import { createStore, combineReducers } from "redux";
import authReducer from "./auth";

const allReducers = combineReducers({ auth: authReducer });

export default function configureStore() {
    const store = createStore(
        allReducers, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;    
};