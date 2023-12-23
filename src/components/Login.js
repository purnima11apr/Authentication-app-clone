import React, {useState} from "react";
import axios from 'axios';


const Login = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault(); 

      const requestData = {
        username,
        password,
      };
    
      console.log('Login request:', requestData);
  
      try {
       
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username : username.trim(),
          password : password,
        });
  
        
        const user = response.data;

        localStorage.setItem('user', JSON.stringify(user));

        onLogin();
      } catch (error) {
        console.error('Login error:', error.response.status, error.response.data);
      }
      
    };
    return(
    <div className="login-div">
       <form className="container-signup" onSubmit={handleLogin}>
         <p className="font">Welcome back!</p>
         <h2>Sign in to your account</h2>
         <label htmlFor="username" className="font">Username</label>
        
         <input type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
        
         <label htmlFor="password" className="font">Password</label>
        
         <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     
       <button type="submit">Continue</button>

       <p className="forget">Forget your password?</p>
       </form>

       <p className="signup">Don’t have an account? <span>Sign up</span></p>
    </div>
    )
}

export default Login;