import { useState } from 'react';
import './video.css';
import commentImg from '../assets/comment-3.png';
import postImg from '../assets/post-1.png';

const Video = () => {
    const [playVideo, setPlayVideo] = useState(true);
    const [commentBoxOpen, setCommentBoxOpen] = useState(false);

    return (
        <>
            <div className="video-cont">
                <div className="user-details">
                    <p className="username"> Navdeep Mor </p>
                    {/* <marquee > video title </marquee> */}
                </div>

                <div className="comment">
                    <div onClick={(e) => {
                        if (!commentBoxOpen) {
                            setCommentBoxOpen(true);
                        } else {
                            setCommentBoxOpen(false);
                        }
                    }}> <img className="comment-btn-img" src={commentImg} alt="comment btn img"/> </div>
                    {commentBoxOpen ?
                        <>
                            <div className="comment-cont">
                                <div className="previous-comment">
                                    <div className="user username1"> User1 </div>
                                    <div className="comment1"> Comment1</div>
                                </div>
                                <div className="comment-form">
                                    <div className="user login-user"> login user </div>
                                    <input type="text" style={{border: 'none', outline: 'none'}}/>
                                    <img className="post-btn-img" src={postImg} alt="post btn img" />
                                </div>
                            </div>
                        </> :
                        ("")}
                </div>

                <video autoPlay="autoplay" muted onClick={(e) => { 
                    if(playVideo) { 
                        e.currentTarget.pause();
                        setPlayVideo(false); 
                    } else { 
                        e.currentTarget.play();
                        setPlayVideo(true);
                    } 
                }} > 
                    <source src="https://firebasestorage.googleapis.com/v0/b/reels-app-adb0a.appspot.com/o/posts%2Freels-video-2.mp4?alt=media&token=5e40007f-95ee-4fdf-bb74-e0c8c56c1ea1" type='video/mp4'/> 
                </video>
            </div>
        </>
    )
}

export default Video;