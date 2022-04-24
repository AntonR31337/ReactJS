import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logOut, userRef, userShowNameRef } from '../../services/firebase';
import { initProfilerTrack, setShowName, stopProfilerTrack, toggleCheckbox } from "../../store/profile/actions"
import { selectName, selectShowName } from '../../store/profile/selectors';

import img from "./avatar.jpeg";
import './style.scss';

export default function Profile(){

    const showName = useSelector(selectShowName);
    const name = useSelector(selectName);

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setShowName(!showName));
    };

    useEffect(()=>{
        dispatch(initProfilerTrack());
        return ()=> {
            dispatch(stopProfilerTrack());
        };
    }, []);


    return (
        <div className="App">
                <h1>Profile {showName && name}</h1>
                <Stack direction="row" spacing={2}>
                    <Avatar
                    alt={state.name}
                    src={img}
                    sx={{ width: 90, height: 90 }}
                    />
                </Stack>
                <button onClick={handleClick}>Show name</button>
                <hr />
                <button onClick={logOut}>LogOut</button>
      </div>
    );
}