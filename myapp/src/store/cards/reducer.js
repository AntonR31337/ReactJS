import { FETCH_STATUSES } from "../../utils/constants";
import { GET_CARDS_FAILURE, GET_CARDS_REQUEST, GET_CARDS_SUCCESS } from "./actions";


const initialState = {
    data: [],
    status: FETCH_STATUSES.IDLE,
    error: null,
};

export const cardsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CARDS_REQUEST: {
            return {...state, status: FETCH_STATUSES.REQUEST, error: null};
        }
        case GET_CARDS_FAILURE: {
            return { ...state, status: FETCH_STATUSES.FAILURE, error: payload};
        }
        case GET_CARDS_SUCCESS: {
            return { ...state, status: FETCH_STATUSES.SUCCESS, data: payload, error: null};
        }
        default:
            return state;
    }
};