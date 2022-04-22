import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import { LoginForm } from '../../components/LoginForm';
import { logIn, signUp } from '../../services/firebase';
import { useState } from 'react';

export const Home = ({ isSignUp }) => {
  const [error, setError] = useState("");

  const handleSubmit = async ({ login, pass })=> {
    try {
      if (isSignUp){
        await signUp(login, pass);
      } else {
        await logIn(login, pass)
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Home Page</h1>
            <LoginForm isSignUp={isSignUp} onSubmit={handleSubmit} />
            {error && <h4>{error}</h4>}
              <Link to={isSignUp ? "/" : "signup"}>
                {isSignUp ? "to login" : "to signup"}
              </Link>
          {/* <button onClick={onAuth} >Auth</button> */}
        </header>
      </div>
  );
};