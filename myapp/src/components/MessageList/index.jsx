import React, { useEffect, useState } from 'react';
import './style.scss';
import Message from '../Message';
import MessageForm from '../MessageForm';
import { useParams } from 'react-router';

const name = "Antonio"

export default function MessageList() {

    const initMessages = {
        chat1: [],
        chat2: [],
        chat3: [],
        chat4: [],
    }
    const { id } = useParams();

    const [messages, setMessages] = useState(initMessages);

    const addMessage = (newText) => {

        setMessages({ ...messages, [id]: [...messages[id], {
            author: name,
            text: newText,
            id: `msg-${Date.now()}`
        }],
     });
    };

    useEffect(() => {
        let timeOut;
        if (messages[id].length && messages[id][messages[id].length - 1].author === name) {
            timeOut = setTimeout(() => {
                setMessages({...messages, [id]: [...messages[id], {
                    author: "Robot",
                    text: "Сообщение проверено роботом",
                    id: `msg-${Date.now()}`
                }]})
            }, 1000)
        }
        return () => clearTimeout(timeOut);
    }, [messages])

    return (
        <div className="Message">
            <h1>{"text"}</h1>
            <div id='MessageDisplay'>
                <div className="MessageList">
                    {messages[id].map((msg) =>
                        <Message key={msg.id} author={msg.author} text={msg.text} />
                    )}
                </div>
            </div>
            <MessageForm onSubmit={addMessage} />
        </div>
    );
}
