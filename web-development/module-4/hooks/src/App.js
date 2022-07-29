import './App.css';
import Us from './Components/Us'
import Ue1 from './Components/Ue1'
import Ue2 from './Components/Ue2'
import Infinite from './Components/Infinite'
import Ue3 from './Components/Ue3'
import context from './Components/Context'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Parent1 from './Components/Parent1'
import Parent2 from './Components/Parent2'

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <context.Provider value = { theme } >
      <Navbar/>
      <Parent1/>
      <Parent2/>
      <button onClick = { () => setTheme(!theme) }> Change Theme </button>
      {/* <Ue3/> */}
      {/* <Infinite/> */}
      {/* <Ue2/> */}
      {/* <Ue1/> */}
      {/* <Us/> */}
    </context.Provider>
  );
}

export default App;

/*
                                                          --------  useState  --------

  use___ - hooks
  used for defining states in functional components, which is not there earlier


                                                          --------  useEffect  --------

  It get the lifecycle methods with different variations in fn components



                                                          --------  Context API --------
                            
  Issue which it resolves:
    - Prop drilling
        Email is req. at page 5. It's present at page 1. With prop drilling we can send email as 
         --------                                    --------
        | page 1 | -> page 2 -> page 3 -> page 4 -> | page 5 |
         --------                                    --------

        disadv
        - With sending it through each child page in bet where it's not even required we are compromise with security


                                                                page 1. login [email]
                                                                          |
                                                              ------------ ------------
                                                             |                         |
                                                                                     page 2.
                                                                                       |
                                                                           ------------ ------------
                                                                          |                         |
                                                                                                  page 3.
                                                                                                    |
                                                                                        ------------ ------------
                                                                                       |                         |
                                                                                                               page 4.
                                                                                                                 |
                                                                                                     ------------ ------------
                                                                                                                              |
                                                                                                                            page 5. [email req.]


                                                          --------  Context  --------
  Context                                                        
    - Global store:                                                        
                 
  Issue which it resolves:
    - Assume multiple pages are there and we need to set a theme. Since it will be common for all pages thus our requirement would be to send it across all pages. 
      - whichever component needs Theme it could get it from global store.

                       ----------------
                      | Theme: light   | 
                      |                |
                      |                |
                      |                |
                       ----------------
                         Global store
  */