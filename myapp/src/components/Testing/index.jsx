import React from "react";

export const MyThemeContext = React.createContext({theme: 'dark'});

export default function Testing() {
    console.log(MyThemeContext);
    
    return(
        <h1>Test component</h1>
    )
};