import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

export default function Fireauth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    let create = async () => {
        //console.log(email);
        let response = await auth.createUserWithEmailAndPassword(email, password);
        console.log(response);
    }

    useEffect(() => {
        let unsubscribeAuth = auth.onAuthStateChanged((user) =>                                                         // like an evenlistener it will be trigger when user's state changes
            setUser(user))  
        return(() => {
            unsubscribeAuth();                                                                                          // cleanUp - inside return we would call the ref. to remove the listener on auth | return executes only once and that also before componentWillUnmount                                                                                                                    
        })
    }, [])                                                                                                              // [] - componentDidMount

    let logout = async () => {
        await auth.signOut();
    }

    let signin = async () => {
        await auth.signInWithEmailAndPassword(email, password);
    }

    return (
        <>
            {
                user == null ? 
                <div>
                    <label htmlFor = "email" > Email </label>
                    <input type = "text" value = { email } onChange = { (e) => setEmail(e.target.value) } />
                    <label htmlFor = "password"> Password </label>
                    <input type = "password" value = { password } onChange = { (e) => setPassword(e.target.value) } />
                    <button onClick = { signin }> signin </button>
                </div> :
                <>
                    <div> { user.uid } </div>
                    <button onClick = { logout } > log out </button>
                </>
            }
        </>
    )
}
