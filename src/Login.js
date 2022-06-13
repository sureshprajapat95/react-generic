import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from './Common/ApiService';
import apiRoutes from './Common/apiRoutes';
import { toast } from 'react-toastify';
import {AuthContext} from './store/auth-context';

function Login() {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  console.log(authCtx.isLoggedIn);
  useEffect( () => {
    if(authCtx.isLoggedIn) {
      navigate('users');
    }
  },[]);

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
    authCtx.login(apiRoutes.login,payload);
    // const { response, loading, error } = useApi({
    //   endPint: apiRoutes.login,
    //   headers: JSON.stringify({ accept: '*/*' }),
    //   body: JSON.stringify(payload),
    // });

    // console.log(response);

    // ApiService(apiRoutes.login, payload).then((response) => {
    //   if(response.data.status){
    //     let data = response.data;
    //     localStorage.setItem('user_data',JSON.stringify(data.data));
    //     navigate(`/users`);
    //   }else{
    //     toast.error(response.data.message, {
    //       position: "bottom-right",
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   }
    // }).catch((err)=>{console.log(err)});
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