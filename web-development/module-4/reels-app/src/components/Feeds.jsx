import React, { useState, useEffect, useContext } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { authContext } from './context/AuthContext';
import Navbar from './Navbar';
import Video from './Video';
import './feeds.css';

function Feeds() {
    const user = useContext(authContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            let tmp = [];
            querySnapshot.forEach((doc) => {
                tmp.push(...doc.data().posts);                                                     // doc.data() is never undefined for query doc snapshots
            });
            setPosts(tmp);
        })();
    }, [])

    return (
        <>
            {/* {console.log("inside feeds : ", posts)} */}
            <Navbar />
            <div className="main-cont">
                
                <div className="reels-cont">
                    {posts.map((post) => {
                        return <div key={post.reelUrl} className="reel">
                            <Video post={post} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Feeds;