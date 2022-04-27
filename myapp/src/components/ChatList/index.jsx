import * as React from 'react';
import {useState, useEffect} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar } from '@mui/material/';
import { Link, Outlet } from 'react-router-dom';

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import MessageForm from '../MessageForm';
import { selectChats } from "../../store/chats/selectors";
import { addChat, deleteChat } from '../../store/chats/actions';
import { clearMessages, initMessagesForChat } from '../../store/messages/actions';
import "./style.scss";
import { chatsRef, getChatRefById, getMsgsRefById } from '../../services/firebase';
import { onValue, remove, set } from 'firebase/database';

export default function ChatList() {
    
    // const chats = useSelector(selectChats, shallowEqual);
    const [chats, setChats] = useState([]);
    const dispatch = useDispatch();

    const presOnSubmit = (newChatName)=> {
        const newChat = {
            id: Date.now().toString(),
            name: newChatName
        };
        
        // dispatch(addChat(newChat));
        set(getChatRefById(newChat.id), newChat);
        set(getMsgsRefById(newChat.id), { exists: true } );
    };

    const removeChat = (id) => {
        remove(getChatRefById(id));
        remove(getMsgsRefById(id));
      };

      useEffect(()=>{
        const unsubscribe = onValue(chatsRef, (snapshot)=>{
            setChats(Object.values(snapshot.val() || {} ));
        });
    }, []);
    
    return (
        <div className='chatsWindow'>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {chats.map((chat) => {
                return (
                        <ListItem key={chat.id} alignItems="flex-start" sx={{ borderTop: "solid 1px" }}>
                            <ListItemAvatar>
                                <Avatar alt={chat.name} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <Link key={chat.id} to={`/chats/${chat.id}`}>
                                <ListItemText primary={chat.name} />
                            </Link>
                            <div className='chatItemButtons'>
                                <button onClick={()=> removeChat(chat.id)}>x</button>
                            </div>
                        </ListItem>
                )
            })}

            <MessageForm textBtn={"add chat"} onSubmit={presOnSubmit} />
            
        </List>
        <Outlet />
        </div>
    )
}