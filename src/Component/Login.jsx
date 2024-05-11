import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import users from './Users.json'; // Import the JSON file containing user credentials
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
         // Find user in the users array
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
      // Login successful
      setLoginMessage('Login successful!');
      navigate('/products');
      // You can redirect the user to another page or perform any other action here
    } else {
      // Login failed
      setLoginMessage('Invalid credentials. Please try again.');
    }
      };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label>User Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter User name" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Enter Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
            </form>
            {loginMessage && <p className="login-message">{loginMessage}</p>} {/* Render login message */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
