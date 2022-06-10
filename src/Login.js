import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from './Common/ApiService';
import apiRoutes from './Common/apiRoutes';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    let payload = {
      email,
      password,
    };
    const response = await ApiService(apiRoutes.login, payload).then((resp) =>
      console.log(resp)
    );
    // console.log(response);

    // navigate(`/teams`);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={emailChangeHandler}
        value={email}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={passwordChangeHandler}
        value={password}
      />
      <br />
      <br />
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;
