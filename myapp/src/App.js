import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Testing from './components/Testing';
import ChatList from './components/ChatList';
import MessageList from './components/MessageList';
import Profile from './components/Profile/Profile';

const Home = () => {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Home Page</h1>
        </header>
      </div>
  );
};

function App() {
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
          <Link to="/testing">Testing</ Link>  
        </Button>
    </ButtonGroup>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<ChatList />} >
          <Route path=":id" element={<MessageList />} />
        </Route>
        <Route path="/testing" element={<Testing />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
