import React, { useState } from 'react';

const LoginUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a user object with the login credentials
    const loginCredentials = {
      username,
      password,
    };

    // Send the loginCredentials object to your backend server using fetch or axios
    // For example:
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginCredentials),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login successful:', data.user);
        // Handle successful login or redirect to the user's dashboard
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        // Handle login error or display an error message to the user
      });

    // Reset form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username/Email:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginUser;
