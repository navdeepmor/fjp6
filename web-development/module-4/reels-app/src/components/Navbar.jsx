import {useState, useContext} from 'react';
import {signOut} from 'firebase/auth'
import {auth} from '../firebase';
import './navbar.css';
import {authContext} from './context/AuthContext';
import profileImg from '../assets/profile-2.png';

function Navbar() {
    const [error, setError] = useState('');
    const user = useContext(authContext);

    const handleLogOut = async () => {
        try {
            // setloginLoading(true);
            await signOut(auth);
            // setUser(null);
        } catch (err) {
            setError(err);
            setTimeout(() => {
                setError('');
            }, 2000)
        } 
        // setloginLoading(false);
    }

    return (
        <>
            {
                error ? <h1> {error} </h1> :
                <div className='navbar-container'>
                    <img className='instagram-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png?20160616034027' alt='' />
                    <div className="options">
                        <div className='user-name'>{user.uid}</div>
                        <div className="profile-options" onClick={handleLogOut}> 
                            <img className='profile-icon' src={profileImg} alt='uesr profile' />   
                        </div> 
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar;