import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/auth';

import axios from 'axios';

export default function SigninPage() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getMe = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/me`, { withCredentials: true });
        history.push('/locations'); // User already authorized, go to locations
      } catch (error) {
        // ... do nothing
      }
    };

    getMe();
  }, [history]);

  const handleSubmit = async () => {
    try {
      await dispatch(signIn(username, password));
      return history.push('/locations');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <h1>Sign in</h1>
      <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={handleSubmit} disabled={!username.length || !password.length}>Submit</button>

      <p>
        Don't have an account yet? Sign up <Link to="/signup">here</Link>.
      </p>
    </>
  );
}
