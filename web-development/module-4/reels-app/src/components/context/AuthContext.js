import {onAuthStateChanged} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {auth} from '../../firebase';

export const authContext = React.createContext("user's state info");

function AuthContextProvider({children}) {
    const [feedsLoading, setFeedsLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        onAuthStateChanged(auth, (u) => {
            if(u) setUser(u);
            else setUser(null);
            setFeedsLoading(false);
        });
    }, [])
    
    return (
        <authContext.Provider value={user}>
            {feedsLoading === false && children}                                                                {/* when feedsLoading is false then it will show children */}
        </authContext.Provider>
    )
} 

export default AuthContextProvider;