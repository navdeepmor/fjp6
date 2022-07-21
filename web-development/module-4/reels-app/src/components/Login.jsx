import {useState} from 'react';
import {signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase';
import { useEffect } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [loginLoading, setloginLoading] = useState(false);
    const [error, setError] = useState('');
    const [feedsLoading, setFeedsLoading] = useState(true);

    const handleLogin = async () => {
        try {
            setloginLoading(true);
            let userCred = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCred.user);
            setEmail('');
            setPassword('');
        } catch(err) {
            setError(err);
            setTimeout(() => {
                setError('');
            }, 2000)
        }
        setloginLoading(false);
    }

    const handleLogOut = async () => {
        try {
            setloginLoading(true);
            await signOut(auth);
            setUser(null);
        } catch (err) {
            setError(err);
            setTimeout(() => {
                setError('');
            }, 2000)
        } 
        setloginLoading(false);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            } 
            setFeedsLoading(false);
        })
    }, [])

    return (
        <> 
            {
                error !== '' ? <h1> {error.message} </h1> : 
                    loginLoading || feedsLoading ? <h1> Loading ... </h1> :
                        user !== null ? <h1> User is {user.uid } <br /> <button type='click' onClick={handleLogOut}> Log out </button> </h1> :  
                        <>
                            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
                            <button type='click' onClick={handleLogin}> Login </button>
                        </>
            }                   
        </>
    )
}

export default Login;