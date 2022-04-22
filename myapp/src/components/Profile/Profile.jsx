import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../services/firebase';
import { toggleCheckbox } from "../../store/profile/actions"

import img from "./avatar.jpeg";
import './style.scss';

export default function Profile({ userName }){
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleCheckbox)
    };


    return (
        <div className="App">
                <h1>Profile {state.profile.showName && state.profile.name}</h1>
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