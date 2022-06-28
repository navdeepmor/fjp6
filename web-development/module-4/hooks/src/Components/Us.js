import React, { useState } from 'react'

export default function Us() {
  const [count, setCount] = useState(0);                                                                  // [ stateName, stateChangingFn ] = usestate( initialValue )   
  const [obj, setObj] = useState({ msg: "this is an obj using useState" })
  return (
    <div>
        <h1> Current count : { count } </h1>
        <button onClick = { () => setCount(count + 1) } > + 1 </button>

        <h2> { obj.msg } </h2>
    </div>
  )
}

/*
  rfce - to create react fn component
*/