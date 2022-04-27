import { getCards, getCardsRequest, getCardsSuccess, GET_CARDS_REQUEST } from "../actions";

describe('getCardsRequest test', ()=>{
    it('return obj with predef type', ()=>{
        const expected = {
            type: GET_CARDS_REQUEST,
        };

        const received = getCardsRequest();

        expect(received).toEqual(expected);
    });
});

describe('getCards', ()=> {
    it('dispatches getCardsRequest', ()=> {
        const mockDispatch = jest.fn();
        getCards()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getCardsRequest());
    });

    it('dispatches getCardsSuccess with fetch result', async ()=> {
        const data = [{ name: "test" }];
        fetch.mockResponse(JSON.stringify(data));
        const mockDispatch = jest.fn();

        await getCards()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getCardsSuccess(data));
    });
});