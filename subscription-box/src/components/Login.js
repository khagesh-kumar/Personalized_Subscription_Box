import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/signup', { username, email, password });
      alert('Account created successfully');
      setIsLogin(true); // Redirect to login section after signup
    } catch (error) {
      alert('Signup failed');
    }
  };

  const handleGoogleSignup = () => {
    alert('Google signup is not yet implemented.');
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: 'url("https://wallpapercave.com/wp/wp7844585.jpg")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '800px',
          display: 'flex',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          background: '#fff',
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: 1,
            background: 'linear-gradient(to bottom right, #ffcc00, #ffaa00)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <i
            className="bx bx-box"
            style={{
              fontSize: '80px', // Adjust the size of the icon
              marginBottom: '20px',
            }}
          ></i>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}><b>SUBBOX</b></h1>
          <p style={{ fontSize: '16px' }}>
            Personalized Subscription Box Generator
          </p>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            background: '#fff',
            padding: '40px',
          }}
        >
          {isLogin ? (
            <div>
              <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    marginTop: '15px',
                    width: '100%',
                  }}
                  type="submit"
                >
                  Login
                </Button>
                <p className="mt-3" style={{ textAlign: 'center' }}>
                  Don't have an account?{' '}
                  <Button
                    variant="link"
                    onClick={() => setIsLogin(false)}
                    style={{ color: '#007bff', textDecoration: 'none' }}
                  >
                    Sign up here
                  </Button>
                </p>
              </Form>
            </div>
          ) : (
            <div>
              <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Sign Up</h2>
              <Form onSubmit={handleSignupSubmit}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Create Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>Re-enter Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    marginTop: '15px',
                    width: '100%',
                  }}
                  type="submit"
                >
                  Sign Up
                </Button>
                <p className="mt-3" style={{ textAlign: 'center' }}>
                  Already have an account?{' '}
                  <Button
                    variant="link"
                    onClick={() => setIsLogin(true)}
                    style={{ color: '#007bff', textDecoration: 'none' }}
                  >
                    Login here
                  </Button>
                </p>
                <Button
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    marginTop: '10px',
                    width: '100%',
                  }}
                  onClick={handleGoogleSignup}
                >
                  Sign up with Google
                </Button>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
