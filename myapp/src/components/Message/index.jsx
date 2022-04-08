import './style.scss';
import {Avatar} from "@mui/material";

export default function Message({id, author, text }) {
    return (
        <div className="MessageItem">
            <Avatar title={author} sx={{ margin: "10px", color: "red", backgroundColor: "#61dafb"}} >{author[0]}</Avatar>
            <q className='MessageItem__text'>{text}{id}</q>
        </div>
    );
}
