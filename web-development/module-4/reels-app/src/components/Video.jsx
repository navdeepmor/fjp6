import { useState } from 'react';

// import { useEffect } from 'react';
import { db } from '../firebase';
import { updateDoc, doc } from 'firebase/firestore';
import './video.css';
import commentImg from '../assets/comment-3.png';
import postImg from '../assets/post-1.png';

const Video = ({ post }) => {
    const [playVideo, setPlayVideo] = useState(true);
    const [commentBoxOpen, setCommentBoxOpen] = useState(false);
    // const [comment, setComment] = useState([]);
    const [logInUserComment, setLogInUserComment] = useState('');

    const handlePostComment = () => {
        (async () => {
            const docRef = doc(db, 'posts', post.userId);
            await updateDoc(docRef, {
                posts: {
                    comments: logInUserComment
                }
            });
        })();
    }

    return (
        <>
            <div className="video-cont">
                <div className="user-details">
                    <p className="username"> {post.userId} </p>
                    {/* <marquee > video title </marquee> */}
                </div>

                <div className="comment">
                    <div onClick={(e) => {
                        if (!commentBoxOpen) {
                            setCommentBoxOpen(true);
                        } else {
                            setCommentBoxOpen(false);
                        }
                    }}> <img className="comment-btn-img" src={commentImg} alt="comment btn img" /> </div>
                    {commentBoxOpen ?
                        <>
                            <div className="comment-cont">
                                <div className="previous-comment">
                                    <div className="user username1"> User1 </div>
                                    <div className="comment1"> Comment1</div>
                                </div>
                                <div className="comment-form">
                                    <div className="user login-user"> login user </div>
                                    <input value={logInUserComment} onChange={(e) => setLogInUserComment(e.currentTarget.value)} type="text" style={{ border: 'none', outline: 'none' }} />
                                    <img onClick={handlePostComment} className="post-btn-img" src={postImg} alt="post btn img" />
                                </div>
                            </div>
                        </> :
                        ("")}
                </div>

                <video autoPlay="autoplay" muted onClick={(e) => {
                    if (playVideo) {
                        e.currentTarget.pause();
                        setPlayVideo(false);
                    } else {
                        e.currentTarget.play();
                        setPlayVideo(true);
                    }
                }} >
                    <source src={post.reelUrl} type='video/mp4' />
                </video>
            </div>
        </>
    )
}

export default Video;