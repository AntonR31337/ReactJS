import React, {useState} from 'react';
import './style.scss';
import MessageList from '../MessageList';
import MessageForm from '../MessageForm';

const name = "Antonio"

let msgs = [
    {
        author: name,
        text: 'If you want to change smt - start do it now!'
    },
    {
        author: name,
        text: 'But its not sure...'
    },
    {
        author: name,
        text: 'Smt else ...'
    }
]

export default function Message({ text }) {
    const [messages, setMessages] = useState(msgs);

    const addMessage = (newText) => {
        setMessages([...messages, {author: name, text: newText}])
    };

    return (
        <div className="Message">
            <h1>{text}</h1>
            {messages.map((msg) => 
                <MessageList author={msg.author} text={msg.text}/>
            )}
            <MessageForm onSubmit={addMessage}/>
        </div>
    );
}
