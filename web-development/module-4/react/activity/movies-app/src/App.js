import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Movies/>
    </>
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
*/