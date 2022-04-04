import React, { useEffect, useState } from 'react';
import './style.scss';
import MessageList from '../MessageList';
import MessageForm from '../MessageForm';
import ChatList from '../ChatList';

const name = "Antonio"

let msgs = [];
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

export default function Message({ text }) {
    const [messages, setMessages] = useState(msgs);

    const addMessage = (newText) => {
        setMessages([...messages, {
            author: name,
            text: newText,
            id: `msg-${Date.now()}`
        }])
    };

    useEffect(() => {
        let timeOut;
        if (messages.length && messages[messages.length - 1].author === name) {
            timeOut = setTimeout(() => {
                setMessages([...messages, { author: "Robot", text: "Сообщение проверено роботом", id: `msg-${Date.now()}` }])
            }, 3000)
        }
        return () => clearTimeout(timeOut);
    }, [messages])

    return (
        <div className="Message">
            <h1>{text}</h1>
            <div id='MessageDisplay'>
                <ChatList data={chats} />
                <div className="MessageList">
                    {messages.map((msg) =>
                        <MessageList key={msg.id} author={msg.author} text={msg.text} />
                    )}
                </div>
            </div>
            <MessageForm onSubmit={addMessage} />
        </div>
    );
}
