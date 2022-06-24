import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>                                       
        <Route path = '/' exact render = {(props) => (                                                                // here props refers to inbuild props which are match, location and history (which are by default passed to our components in routing). But here we need to pass them manualy so that we could use routing in Banner component & Movies   
          <>
            <Banner { ...props } ImSending = "This is Name" />
            <Movies { ...props } />
          </>
        )}/>                  
        <Route path = '/favourites' component = { Favourite } /> 
      </Switch>
      {/* <Banner/> */}
      {/* <Movies/> */}
      {/* <Favourite/> */}
    </Router>
  );
}

export default App;


/* 
  Note:
    1. Wrap:  
       <React.Fragment></React.Fragment> 
       <></>                                                                                                    ex: line 7
    2. CSS
       Inline                                                                                                   style = { { } }
       Object
       external CSS file
       external module file

                                                        ----- Routing  ------ 
    1. Browser Router
        - It wraps the components & the components which are wrapped would gets the facility of routing. 
    2. Route  
        - line 14, 20
    3. exact
        - line 14
    4. Switch  
        - line 13
    5. Link
        - Navbar line 8, 9
    6. render
        - line 14  send multiple components in a single route 
                   line 16: ImSending  also able to send props  
    

    Note:
        1. npm install react-router-dom 

    Issues:
      line 13, 14 
        - when we would make call to '/Favourite' them it will display both the components Movies and Favourite i.e. Multiple routes because route path starts 
          with '/' thus they both would be considered
        - soln:
            Multiple routes -  Switch
            '/'             -  exact  
*/