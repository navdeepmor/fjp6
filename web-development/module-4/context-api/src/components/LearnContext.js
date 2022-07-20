import React, {useContext, useState} from 'react';

let context = React.createContext(null);

function LearnContext() {
    const [firstName, setFirstName] = useState('Papu');
    const [lastName, setLastName] = useState('Jat');
    return (
        <context.Provider value={{firstName, lastName}}>
            <h1>This is Parent component</h1>
            <ChildA/>
        </context.Provider>
    )
}

export default LearnContext;

function ChildA() {
    return (
        <>
            <h1>This is ChildA, it's children is ChildB</h1>
            <ChildB/>
        </>
    )
}

function ChildB() {
    return (
        <>
            <h1>This is ChildB, it's children is ChildC</h1>
            <ChildC/>
        </>
    )
}

function ChildC() {
    const {firstName, lastName} = useContext(context);
    return (
        <>
            <h1>This is childC</h1>
            <h1>vale of firstName is {firstName} {lastName}</h1>
        </>
    )
}