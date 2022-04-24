import React, { useEffect, useState } from "react";

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
import { Cards } from "./screens/Cards";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";

function App() {

  const [authed, setAuthed] = useState(false);
  const handleLogin = () => {
    setAuthed(true);
    console.log('login')
  };
  const handleLogout = () => {
    setAuthed(false);
    console.log('logout')
  };

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user)=> {
      if (user) {
        handleLogin();
      } else {
        handleLogout();
      }
    });
    return unsubscribe;
  }, []);

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
            <Link to="/cards" >Cards</Link>
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
          <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={handleLogin} />} />
            <Route path="/signup" element={<Home onAuth={handleLogin} isSignUp />} />
          </Route>
          <Route path="/profile" element={<PrivateRoute authed={authed} />} >
            <Route path="" element={<Profile onLogout={handleLogout} />} />
          </Route>
          <Route path="/chats" element={<ChatList />} >
            <Route 
              path=":id" 
              element={<MessageList />} />
          </Route>
          <Route path="/cards" element={<Cards />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;


// остановился на 42 минуте 9 урока