import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { chatsReducer } from "./chats/reducer.js";
import { profileReducer } from "./profile/reducer.js";
import { messagesReducer } from "./messages/reducer.js"
import { cardsReducer } from "./cards/reducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'gbMessenger',
    storage,
};

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    cards: cardsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);