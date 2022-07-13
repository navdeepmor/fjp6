import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext';
import Feed from './Components/Feed';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/> 
              <PrivateRoute path="/" element={<Feed/>}/>
          </Routes>               
        </AuthProvider>
      </Router>
      {/* <Signup/> */}
      {/* <Login/> */}
    </>
    
  );
}

export default App;
