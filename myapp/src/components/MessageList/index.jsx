import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './style.scss';
import Message from '../Message';
import MessageForm from '../MessageForm';
import { Navigate, useParams } from 'react-router';
import { selectMessages, selectMessagesByChatId } from '../../store/messages/selectors';
import { addMessage, addMessageWithReply } from '../../store/messages/actions';
import { onValue, push } from 'firebase/database';
import { getMsgsListRefById, getMsgsRefById } from '../../services/firebase';

const name = "Antonio";

export default function MessageList() {

    const { id } = useParams();
    const [messages, setMessages] = useState([]);
    const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const dispatch = useDispatch();
    const addNewMessage = (newText) => {
        push(getMsgsListRefById(id), {
            author: name,
            newText,
            id: `msg-${Date.now()}`,
        });
    };

    useEffect(()=> {
        const unsubscribe = onValue(getMsgsRefById(id), snapshot => {
            const val = snapshot.val();
            if (!snapshot.val()?.exists) {
                setMessages(null);
            } else {
                setMessages(Object.values(val.messageList || {}));
            }
        });

        return unsubscribe;
    }, [id]);

    // не работат роутинг на страницу чатов, если чат удалён
    if (!messages) {
        return <Navigate to="/chats" replace />
    }

    return (
        <div className="Message">
            <h1>{"text"}</h1>
            <div id='MessageDisplay'>
                <div className="MessageList">
                    {messages.map((msg) =>
                        <Message key={msg.id} author={msg.author} text={msg.newText} />
                    )}
                </div>
            </div>
            <MessageForm textBtn={"Add Message"} onSubmit={addNewMessage} />
        </div>
    );
}
