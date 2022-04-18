import './style.scss';
import { useState, useEffect, useRef } from "react";
import {Button, TextField} from "@mui/material"

export default function MessageForm({onSubmit, textBtn}){
        const [value, setValue] = useState('');

        const presOnSubmit = (event) => {
            event.preventDefault();

            onSubmit(value);
            setValue('');
        };

        const changeText = (event) => {
            setValue(event.target.value);
        };

        const focusedRef = useRef();

        useEffect(()=> {
            focusedRef.current?.focus();
        })
    
    return (
        <form className="MessageForm" onSubmit={presOnSubmit}>
            <TextField id="outlined-basic" variant="outlined" value={value} onChange={changeText} type="text" ref={focusedRef}/>
            <Button variant="outlined" type="submit">{textBtn}</Button>
        </form>
    )
};