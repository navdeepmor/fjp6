import React from 'react'

function Child1() {                                                                                     // incase if we send theme using prop them we need to destructure here like:  function Child1({ theme }) { ... }
    console.log("child1 called");
    return (
        <div> child 1 component </div>                                                                  // <div className = { theme ? 'dark' : 'light' } > child 1 component </div>
    )
}

export default Child1                                                                                   // export default React.memo(child1) ->  with it child1 wouldn't re-render because of it's parent1 being re-render. This optimise our react by tell it to memoize the component, if there is change in this component them re-render.