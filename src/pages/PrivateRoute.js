import React, { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { UserContext } from './../hooks/UserContext';
import Loading from './Loading';

export default function PrivateRoute(props) {
   const { user, isLoading } = useContext(UserContext);
   const history = useHistory();
   const { component: Component, ...rest } = props;
   
   if(isLoading) {
      return <Loading/>
   }

   if(user){
      return ( <Route {...rest} render={(props) => 
           (<Component {...props}/>)
         }
      />
   )}

   //redirect if there is no user 
   history.push('/login',{from: "Private"});
   return null;
}