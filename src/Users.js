import React, { useState, useEffect } from 'react';
import ApiService from './Common/ApiService';
import apiRoutes from './Common/apiRoutes';

const Users = () => {
  const [users,setUsers] = useState([]);
  useEffect( () => {
    ApiService(apiRoutes.users,{}).then((result)=>{
      console.log(result);
    })
    .then((err)=> {
      console.log(err);
    });
  },[]);
  return <>Teams</>;
};

export default Users;
