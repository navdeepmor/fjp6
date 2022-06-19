import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
// import { arr } from './Components/Todo';

function App() {
  // console.log(arr);
  return (
    <div>
      <h1> Todo App </h1>
      <Todo></Todo>
    </div>
  );
}


export default App;


/* 
  npx create-react-app todo-app                                                                                     
  cd todo-app
  npm start

  Note:
    1. Package.json - dependencies

  REMOVE:
    1. index.js  <React.StrictMode></React.StrictMode>                                                            strict mode -  error handling 


                                                                    export
                                                                      |
                                                      --------------------------------------
                                                     |                                      |
                                                   export                              export default

                                              1. import { arr } from ' '            1. only one in a file
                                                                                    2. import Xyz from './Components/Xyz';
*/