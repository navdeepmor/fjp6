import React, { useState, useEffect } from 'react'

function Ue1() {
    const [count, setCount] = useState(0);

    useEffect(() => {                                                                                               // Variation 1:  useEffect(() => { })    here it is runs for both
        console.log("useEffect");                                                                                   //                                          - componentDidMount     
        document.title = `Button clicked ${ count } times`;                                                         //                                          - componentDidUpdate
        // Side effects wala work ex: calling API
    })

    console.log("render");
    return (
        <div>
            <h1> Current count : { count } </h1>
            <button onClick = { () => setCount(count + 1) } > + 1 </button>

        </div>
    )
}

export default Ue1