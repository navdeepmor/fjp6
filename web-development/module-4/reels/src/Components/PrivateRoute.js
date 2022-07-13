import React, {useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import {Route} from 'react-router-dom';
// import {Redirect} from 'react-router';

export default function PrivateRoute({component: Component, ...rest}) {
  const {user} = useContext(AuthContext);
  return (
    <Route {...rest} render={props => {
        // return user?<Component {...props}/>: <Redirect to="/login"/>
    }}/>
  )
}
