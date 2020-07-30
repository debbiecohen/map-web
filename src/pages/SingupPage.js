import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../actions/auth';

export default function SignupPage() {
  const history = useHistory();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await dispatch(signUp(usernameRef.current.value, passwordRef.current.value));
      return history.push('/signin');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <h1>Sign up</h1>
      <input ref={usernameRef} type="text" placeholder="Username" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}