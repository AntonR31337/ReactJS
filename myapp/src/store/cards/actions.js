import { API_URL } from "../../utils/constants";

export const GET_CARDS_REQUEST = "CARDS::GET_CARDS_REQUEST";
export const GET_CARDS_SUCCESS = "CARDS::GET_CARDS_SUCCESS";
export const GET_CARDS_FAILURE = "CARDS::GET_CARDS_FAILURE";

export const getCardsRequest = ()=> ({
    type: GET_CARDS_REQUEST,
});

export const getCardsSuccess = (data)=> ({
    type: GET_CARDS_SUCCESS,
    payload: data,
});

export const getCardsFailure = (error)=> ({
    type: GET_CARDS_FAILURE,
    payload: error,
});

export const getCards = ()=> async (dispatch) => {
    try {
        dispatch(getCardsRequest());
        const response = await fetch(API_URL);
        if (!response.ok){
            throw new Error(`Error ${response.status}`);
        }

        const result = await response.json();

        dispatch(getCardsSuccess(result.cards));
    } catch (e) {
        dispatch(getCardsFailure(e.message));

    }
};