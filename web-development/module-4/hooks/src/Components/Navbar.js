import React, { useContext } from 'react'                                                                           // useContext -  hooks
import context from './Context'

export default function Navbar() {
    const theme = useContext(context);
    console.log(theme);
    console.log("Navbar called");
    return (
        <div className = { theme? 'dark' : 'light' } >
            Navbar
        </div>
    )
}