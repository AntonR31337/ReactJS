import { FETCH_STATUSES } from "../../../utils/constants";
import { getCardsRequest } from "../actions";
import { cardsReducer } from "../reducer";

describe('cards Reducer tests', ()=> {
    it('sets error to null if called with request action', ()=> {
        const result = cardsReducer({
            data: [],
            status: FETCH_STATUSES.IDLE,
            error: "some error",
        }, getCardsRequest() );
        expect(result.error).toBeNull();
    });
});