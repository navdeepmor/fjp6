import {useState} from 'react';
import ChildA from './ChildA';

function Parent() {
    const [firstName, setFirstName] = useState('Lalu');
    const [lastName, setLastName] = useState('Bihari');
    return (
        <>
            <h1>This is Parent, it's children is ChildA</h1>
            <ChildA fName={firstName} lName={lastName}/>
        </>
    )
}

export default Parent;