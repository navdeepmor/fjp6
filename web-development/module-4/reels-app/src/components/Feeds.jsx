import React from 'react';
import Navbar from './Navbar';
import './feeds.css';
import Video from './Video';
import uploadImg from '../assets/upload-1.png';
import {storage} from '../firebase';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';

function Feeds() {
    const hiddenFileInput = React.useRef(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    }

    const handleUpload = (e) => {
        const videoObj = e.currentTarget.files[0];
        let {name, size, type} = videoObj;
        console.log('Upload File - name size type : ', name, size, type);
        type = type.split("/")[0];

        if(type === "video") {
            const storageRef = ref(storage, `posts/${name}`);
            const uploadTask = uploadBytesResumable(storageRef, videoObj);
            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log('video uploaded');
                    }
                }, 
                (error) => {
                    // Handle unsuccessful uploads
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    });
                }
            );                                                                                            
        } else {
            alert("Please select a video file");
        }
    }

    return (
        <>
            <Navbar/>
            <div className="main-cont">
                <div className="upload-cont">
                    <img onClick={handleClick} className='upload-img' src={uploadImg} alt="upload video" />
                    <input type="file" ref={hiddenFileInput} onChange={ (e) => handleUpload(e) } style={{display: 'none'}} />
                </div>
                <div className="reels-cont">
                    <Video/>
                </div>
            </div>
        </>
    )
}

export default Feeds;