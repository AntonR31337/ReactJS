import React, { useEffect, useState } from 'react';
import './style.scss';
import Message from '../Message';
import MessageForm from '../MessageForm';
import { useParams } from 'react-router';

const name = "Antonio"

let msgs = [];

export default function MessageList({ text }) {
    const { id } = useParams();

    const [messages, setMessages] = useState(msgs);

    const addMessage = (newText) => {
        setMessages([...messages, {
            author: name,
            text: newText,
            id: `msg-${Date.now()}`
        }
        ])
        console.log(messages);
    };

    useEffect(() => {
        let timeOut;
        if (messages.length && messages[messages.length - 1].author === name) {
            timeOut = setTimeout(() => {
                setMessages([...messages, {
                    author: "Robot",
                    text: "Сообщение проверено роботом",
                    id: `msg-${Date.now()}`
                }])
            }, 1000)
        }
        return () => clearTimeout(timeOut);
    }, [messages])

    return (
        <div className="Message">
            <h1>{text}</h1>
            <div id='MessageDisplay'>
                <div className="MessageList">
                    {messages.map((msg) =>
                        <Message key={msg.id} author={msg.author} text={msg.text} />
                    )}
                </div>
            </div>
            <MessageForm onSubmit={addMessage} />
        </div>
    );
}
