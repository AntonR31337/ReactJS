import React, { useState } from "react";

import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import ChatList from './components/ChatList';
import Testing from './components/Testing';
import MessageList from './components/MessageList';
import Profile from './components/Profile/Profile';

import isActiveTogle from "./utils/isAcriveTogle.js"

import './App.css';
import { Home } from "./screens/Home";

// let initialChats = [
//   {
//       id: "1",
//       name: "Antonio"
//   },
//   {
//       id: "2",
//       name: "Tomas"
//   },
//   {
//       id: "3",
//       name: "Angelina"
//   },
//   {
//       id: "4",
//       name: "Brandy"
//   }
// ];

// const initialMessages = initialChats.reduce((acc, chat) => {
//   acc[`chat${chat.id}`] = [];
//   return acc;
// }, {});

// const Home = () => {
//   return (
//     <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1>Home Page</h1>
//         </header>
//       </div>
//   );
// };

function App() {

  // const [chats, setChats] = useState(initialChats);
  // const chats = useSelector(state => state.chats);
  // const dispatch = useDispatch();

  // const [messages, setMessages] = useState(initialMessages);

  // const removeChat = (id) => {
  //   dispatch(deleteChat(id))
  // };

  // const addNewChat = (newChatUser)=> {
  //   dispatch(addChat(newChatUser));
  //   setMessages((prevMessages)=> ({ ...prevMessages, [newChatUser.id]: [] }));
  // }

  return (
      <BrowserRouter>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/chats" >Chats</Link>
          </Button>
          <Button>
            <Link to="/profile">Profile</ Link>  
          </Button>
          <Button>
            <NavLink 
              to="/testing"
              style={isActiveTogle}
              >Testing</ NavLink>  
          </Button>
      </ButtonGroup>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats" element={<ChatList />} >
            <Route 
              path=":id" 
              element={<MessageList />} />
          </Route>
          <Route path="/testing" element={<Testing />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
