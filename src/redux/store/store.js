import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { loginReducer } from "../reducers/loginReducer";
import { monitoresReducers } from "../reducers/monitoresReducers";
import { monitoriasReducers } from "../reducers/monitoriasReducers";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    login: loginReducer,
    monitores: monitoresReducers,
    monitorias: monitoriasReducers
});


export const store = createStore(
    reducers,
        composeEnhancers( applyMiddleware(thunk) )
);