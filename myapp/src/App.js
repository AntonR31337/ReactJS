import logo from './logo.svg';
import './App.css';
import Messages from './screens/Messages';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Message from './components/Message';
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
    </ButtonGroup>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<MessageList />} >
          <Route path=":id" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
