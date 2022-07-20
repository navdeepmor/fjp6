import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            let userCred = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCred.user.uid);
        } catch(error) {
            console.log(error.message);
        }
        
    }

    return (
        <> 
            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
            <button type='click' onClick={handleLogin}> Login </button>
        </>
    )
}

export default Login;