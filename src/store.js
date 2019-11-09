import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers/main.js";
import thunk from "redux-thunk";

const persistConfig = { key: "proxy", storage };
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
    )
);

export const persistor = persistStore(store);
