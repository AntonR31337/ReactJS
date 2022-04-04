import logo from "../../logo.svg"
import Message from "../../components/Message";

export default function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Message text='Мой первый компонент ReactJS' />
        </header>
      </div>
    );
  }