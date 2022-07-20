import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Feeds from './components/Feeds';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/login'> <Login/> </Route>
      <Route path='/signup'> <Signup/> </Route>
      <Route path='/feeds'> <Feeds/> </Route>
      <Route path='/Profile'> <Profile/> </Route>
      <Route > <PageNotFound/> </Route>
    </Switch>
  );
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
                   

*/