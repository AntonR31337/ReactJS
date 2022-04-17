import { ADD_CHAT, DELETE_CHAT } from "./actions";


const initialState = [
    {
        id: "1",
        name: "Antonio"
    },
    {
        id: "2",
        name: "Tomas"
    },
    {
        id: "3",
        name: "Angelina"
    },
    {
        id: "4",
        name: "Brandy"
    }
];

export const chatsReducer = (state = initialState, {type, payload}) => {
    debugger
    switch (type) {
        case ADD_CHAT: {
            return [...state, payload];
        }
        case DELETE_CHAT: {
            return state.filter(({id})=> id !== payload);
        }
        default:
            return state;
    }
};