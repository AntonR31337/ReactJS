import React from "react";

export const MyThemeContext = React.createContext({theme: 'dark'});

export default function Testing() {

    // const mesgs = [
    //     {chat1: [
    //         {name: "name1", text: "text1"},
    //         {name: "name2", text: "text2"}
    //     ]}
    // ];
    // console.log(mesgs);
    return(
        <h1>Test component</h1>
    )
};