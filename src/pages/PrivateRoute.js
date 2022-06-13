import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth-context";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect( ()=> {
    console.log(authCtx.isLoggedIn)
    if (!authCtx.isLoggedIn) {
      navigate("/");
      return;
    }
  },[]);
  return props.children;
};

export default PrivateRoute;
