import './style.scss';
import { useState } from "react";

export default function MessageForm({onSubmit}){
        const [value, setValue] = useState('');

        const presOnSubmit = (event) => {
            event.preventDefault();

            onSubmit(value);
            setValue('');
        };

        const changeText = (event) => {
            setValue(event.target.value);
        };
    
    return (
        <form className="MessageForm" onSubmit={presOnSubmit}>
            <input className='MessageForm__text' value={value} onChange={changeText} type="text" name="" id="" />
            <input className="MessageForm__btn" type="submit" value="Add message" />
        </form>
    )
};