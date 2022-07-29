import {useContext, useEffect, useState} from 'react';
import {authContext} from './context/AuthContext'
import {db} from '../firebase';
import {doc, getDoc} from 'firebase/firestore';
import Navbar from './Navbar';
import './profile.css';

function Profile() {
    const user = useContext(authContext);
    const [profileLoading, setProfileLoading] = useState(true);
    const [userDetails, setUserDetails] = useState('');
    
    useEffect(() => {
        (async () => {
            if(user) {
                // read from db
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                console.log("user data: ", docSnap.data());
                setUserDetails(docSnap.data());
                setProfileLoading(false);
            }
        })();
        
    }, [user])

    return (
        <>
            {
                profileLoading ? <> <Navbar/> <h1 style={{textAlign: 'center'}}> Loading ... </h1> </> :
                <>
                    <Navbar/>
                    <div className='main-container'>
                        <div className='user-profile-cont'>
                            <img src={userDetails.profileImgUrl} alt='user profile img' className='profile-img' />
                            <div className="user-details">
                                <div className="user-name"> user's Name : {userDetails.name} </div>
                                <div className="user-no-of-post"> user's No of Posts: {userDetails.reelsId.length} </div>
                                <div className="user-email"> user's Email : <span className="underline-text"> {userDetails.email} </span> </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Profile;