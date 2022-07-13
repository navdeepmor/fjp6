import React, { useState, useEffect } from 'react'

function Ue3() {
    const [count, setCount] = useState(0);
    // const [text, setText] = useState('');
    const [txt, setText] = useState({msg: ''});

    useEffect(() => {                                                                                               // Variation 3:  useEffect(() => { }, [ varName ])    here it is runs for only
        console.log("useEffect");                                                                                   //                                                      - componentDidMount     
        document.title = `Button clicked ${ count } times`;                                                         //                                                      - componentDidUpdate  ( which depends upon the varName defined in optional list arg )                                                 
    }, [ count ])                                                                                                   // with this we specify that when count changes only then useEffect should be executed 

    let changeText = (e) => {
        txt.msg = e.target.value;                                                                                   // here we are changing value inside obj. React keeps eye on txt which is in stack therefore it wouldn't get to know that it value had be updated & we need to re-render. 
        // setText(txt);                                                                                            // here also react wouldn't get to know that value of txt is changed as address haven't changed of txt  
        // console.log(txt.msg);
        setText({...txt});                                                                                          // here txt gets new address as we define it in new obj & spread value of txt in it thus react knows that it need to re-render. (txt Adrress is in stack which ref. to it's object in heap. React only keep eye on address in stack)
    }
 
    console.log("render");
    return (
        <div>
            <h1> Current count : { count } </h1>
            <button onClick = { () => setCount(count + 1) } > + 1 </button>
            {/* <input type = "text" value = { text } onChange = { (e) => setText(e.target.value) } /> */}
            <input type = "text" value = { txt.msg } onChange = { (e) => changeText(e) } />
        </div>
    )
}

export default Ue3