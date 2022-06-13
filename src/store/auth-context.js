import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import ApiService from "../Common/ApiService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
});

export const AuthContextProvider = (props) => {
    let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token,setToken] = useState(null);

  useEffect( ()=> {
    if(localStorage.getItem('user_data') != null){
        let data = JSON.parse(localStorage.getItem('user_data'));
        setIsLoggedIn(true);
        setToken(data.token);
    }
  },[]);

  const login = (api,payload) => {
    ApiService(api, payload)
      .then((response) => {
        if (response.data.status) {
          let data = response.data;
          localStorage.setItem("user_data", JSON.stringify(data.data));
          setIsLoggedIn(true);
          setToken(data.data.token);
          navigate(`/users`);
        } else {
          toast.error(response.data.message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
