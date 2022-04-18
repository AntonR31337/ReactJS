import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import MediaCard from "../../MediaCard";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../store/cards/actions";
import { selectCards, selectCardsError, selectCardsStatus } from "../../store/cards/selectors";
import { FETCH_STATUSES } from "../../utils/constants";
import './style.scss';

export function Cards(){

    const dispatch = useDispatch();
    const cards = useSelector(selectCards);
    const error = useSelector(selectCardsError);
    const status = useSelector(selectCardsStatus);

    const sendRequest = ()=> {
        dispatch(getCards())
    }

    useEffect(()=> {
        sendRequest()
    }, []);

    return(
        <div className="App">
            <h1>Magic: The Gathering</h1>
            <p>Lorem15</p>
            <button onClick={sendRequest}>Send request</button>
                { status === FETCH_STATUSES.REQUEST && <CircularProgress /> }
                { error && <h4>{error}</h4> }

                <div className="mediaCard_wrapper">
                {cards.map((card)=> (
                    <MediaCard key={card.id} card={card} />
                ))}
                </div>
        </div>
    )
}