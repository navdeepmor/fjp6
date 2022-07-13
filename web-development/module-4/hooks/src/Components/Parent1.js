import React from 'react'
import Child1 from './Child1'
import { useContext } from 'react'
import context from './Context'

export default function Parent1() {
    const theme = useContext(context);
    // console.log("Parent1 called");
    return (
        <div className = { theme ? 'dark' : 'light' } >                                                             {/* Rule 1:  whenever parent re-render then it's child also re-render. Because of which child1 would re-render always along with parent1 be re-render */}
            Parent1
            <Child1/>                                                                                               {/* here child1 takes theme of it's parent div where we had applied the class | incase if it not applied on it's parent then we could use prop to share value of theme like: <child1 theme = { theme } />  */}
        </div>
    )
}