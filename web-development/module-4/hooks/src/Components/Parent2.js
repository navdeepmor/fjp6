import React, { useContext } from 'react'
import context from './Context'

export default function Parent2() {
    console.log("Parent2 called");
    const theme = useContext( context );
    return (
        <div className = { theme ? 'dark' : 'light' } > Parent 2 </div>
    )
}