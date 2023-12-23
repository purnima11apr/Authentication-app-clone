import './App.css';
import React, {useState} from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className='app'>
    {isLoggedIn ? (
      <Profile />
    ) : (
      <Login onLogin={handleLogin} />
    )}
  </div>
  )
   
}

export default App;
