import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./chats/reducer.js";
import { profileReducer } from "./profile/reducer.js";
import { messagesReducer } from "./messages/reducer.js"

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);