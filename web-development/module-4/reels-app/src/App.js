import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Feeds from './components/Feeds'
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthContextProvider from './components/context/AuthContext';
import {useContext} from 'react';
import {authContext} from './components/context/AuthContext';

function App() {
  return (
      <AuthContextProvider>
        <Switch>
          <RedirectToFeeds path='/login' component2={Login} />                                                {/*<Route path='/login'> <Login/> </Route> */}
          <RedirectToFeeds path='/signup' component2={Signup} />                                              {/* <Route path='/signup'> <Signup/> </Route> */}
          <PrivateRoute1 path='/feeds' component1={Feeds} />                                                  {/* <Route path='/feeds'> <Feeds/> </Route> */}
          <PrivateRoute1 path='/profile' component1={Profile} />                                                
          <Route > <PageNotFound/> </Route>
        </Switch>        
      </AuthContextProvider>
  );
} 

function PrivateRoute1(props1) {                                                                                // custom react fn
  const C1 = props1.component1;
  const user = useContext(authContext);
  return(
      <Route {...props1} render={(props1) => {return user != null ? <C1 {...props1}/> : <Redirect {...props1} to='/login' /> }} />
  )
}

function RedirectToFeeds(props2) {
  const C2 = props2.component2;
  const user = useContext(authContext); 
  return (
    <Route {...props2} render={(props2) => {return user != null ? <Redirect {...props2} to='/feeds' /> : <C2 {...props2}/> }} />
  )
}

export default App;

/*

  Note:
    1. to use Switch use need to use earlier version
          npm install react-router-dom@5.3.1 
    2. Cases in which Switch fails
          ex: incase if we swap line 16 with line 12 then for Route path '/login', '/signup' or '/feeds' it will show PageNotFound
              Why? Since Switch checks the Route from top to bottom, also it compares if Route path is included in enter path in url after 'localhost:3000' & pick 
                   the return the children component with first match thus for Route path like this '/' then it would found math with all above. Where as in 
                   case of no Route path specified in the top Route then it would get match with any possible path entered. 
    3. Without Switch it would return all component with which it found match thus all for enter path like '/' or nothing
           
    4. <ComponentName propName={} /> then we would get it in props
       <ComponentName > place1 <Componentname /> we can fetch place1 using props.Children 

*/