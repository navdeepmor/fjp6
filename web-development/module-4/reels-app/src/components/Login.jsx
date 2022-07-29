import {useState} from 'react';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase';
import {useEffect} from 'react';
import Feeds from './Feeds';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [loginLoading, setloginLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            setloginLoading(true);
            let resObj = await signInWithEmailAndPassword(auth, email, password);
            setUser(resObj.user);
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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            } 
        })
    }, [])

    return (
        <> 
            {
                error !== '' ? <h1> {error.message} </h1> : 
                    loginLoading ? <h1> Loading ... </h1> :
                        user !== null ? <Feeds/> :  
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