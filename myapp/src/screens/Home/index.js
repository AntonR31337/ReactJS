import logo from '../../logo.svg';

export const Home = ({ onAuth }) => {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Home Page</h1>

          <button onClick={onAuth} >Auth</button>
        </header>
      </div>
  );
};