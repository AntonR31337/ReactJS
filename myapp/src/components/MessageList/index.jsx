import React, { useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './style.scss';
import Message from '../Message';
import MessageForm from '../MessageForm';
import { Navigate, useParams } from 'react-router';
import { selectMessages, selectMessagesByChatId } from '../../store/messages/selectors';
import { addMessage, addMessageWithReply } from '../../store/messages/actions';

const name = "Antonio"

export default function MessageList() {

    const { id } = useParams();

    // const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
    const getMessages = selectMessagesByChatId(id);
    // const messages = useSelector(getMessages);
    const messages = useSelector(selectMessages)
    const dispatch = useDispatch();
    
    const addNewMessage = (newText) => {
        dispatch(
            addMessage(
              {
                author: name,
                newText,
                id: `msg-${Date.now()}`,
              },
              id
            )
          );
    };

    // не работат роутинг на страницу чатов, если чат удалён
    if (!messages[id]) {
        return <Navigate to="/chats" replace />
    }

    return (
        <div className="Message">
            <h1>{"text"}</h1>
            <div id='MessageDisplay'>
                <div className="MessageList">
                    {messages[id].map((msg) =>
                        <Message key={msg.id} author={msg.author} text={msg.newText} />
                    )}
                </div>
            </div>
            <MessageForm textBtn={"Add Message"} onSubmit={addNewMessage} />
        </div>
    );
}
