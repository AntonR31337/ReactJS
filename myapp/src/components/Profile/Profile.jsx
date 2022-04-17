import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import img from "./avatar.jpeg";
import './style.scss';

export default function Profile(){
    return (
        <div className="App">
                <h1>Profile</h1>
                <Stack direction="row" spacing={2}>
                    <Avatar
                    alt="Antonio"
                    src={img}
                    sx={{ width: 90, height: 90 }}
                    />
                </Stack>
      </div>
    );
}