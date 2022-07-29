import {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, db} from '../firebase';
// import {useEffect} from 'react';
import {setDoc, doc} from 'firebase/firestore';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        try {
            setLoading(true);
            let resObj = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'users', resObj.user.uid), {
                email,                                                                                               // writting email here is same as writting email: email
                password,
                name,
                reelsId: [],
                profileImgUrl: '',
                userId: resObj.user.uid
            })
            setUser(resObj.user);
        } catch(err) {
            setError(err);
            setTimeout(() => {
                setError('');
            }, 2000);
        }   
        setLoading(false);
    }

    return (
        <>
            {
                error !== '' ? <h1> {error.message} </h1> :
                    loading ? <h1> Loading ... </h1> :
                        user != null ? <><h1> Welcome </h1> <h4> {user.uid} </h4></>  :
                        <>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /> <br />
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' /> <br />
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' /> <br /> <br />
                            <button type='click' onClick={handleSignUp}> Sign Up </button>  
                        </>
            }
            
        </>
    )
}

export default Signup;