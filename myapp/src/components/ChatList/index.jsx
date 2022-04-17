import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar } from '@mui/material/';
import { Link, Outlet } from 'react-router-dom';

let chats = [
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

export default function ChatList() {
    return (
        <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {chats.map((chat) => {
                return (
                        <ListItem key={chat.id} alignItems="flex-start" sx={{ borderTop: "solid 1px" }}>
                            <ListItemAvatar>
                                <Avatar alt={chat.name} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <Link key={chat.id} to={`/chats/chat${chat.id}`}>
                                <ListItemText primary={chat.name} />
                            </Link>
                            <button onClick={()=> console.log(chat.id)}>x</button>
                        </ListItem>
                )
            })}
        </List>
        <Outlet />
        </>
    )
}