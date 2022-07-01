import React, { useState, useEffect } from 'react'

function Ue2() {
    const [count, setCount] = useState(0);

    useEffect(() => {                                                                                               // Variation 2:  useEffect(() => { }, [])    here it is runs for both
        console.log("useEffect");                                                                                   //                                               - componentDidMount     
        document.title = `Button clicked ${ count } times`;     
        setCount(100);                                                                                              // Infinite Loop?  when it will come for second time here to do the setCount(100) then it see that earlier also it was 100. Thus it takes that no change are heppen so no re-render                                             
        // let num = Math.random() * 100;                                                                           
        // setCount(num);                                                                                           // here it will cause an infinite loop
    }, [])

    console.log("render");
    return (
        <div>
            <h1> Current count : { count } </h1>
            <button onClick = { () => setCount(count + 1) } > + 1 </button>

        </div>
    )
}

export default Ue2