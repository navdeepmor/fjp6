import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { db, storage } from '../firebase';
import { firebaseConfig } from '../secrets';
import uploadImg from '../assets/upload-1.png';

function Upload() {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const hiddenFileInput = React.useRef(null);

    const clickInput = () => {
        hiddenFileInput.current.click();
    }

    const handleUpload = (e) => {
        const videoObj = e.currentTarget.files[0];
        let { name, size, type } = videoObj;
        console.log('Upload File - name size type : ', name, size, type);
        type = type.split("/")[0];

        if (type === "video") {
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
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        const docRef = doc(db, 'posts', user.uid);
                        const docSnap = await getDoc(docRef);
                        let prevPosts = docSnap.data();
                        if (prevPosts) {
                            await setDoc(doc(db, 'posts', user.uid), {
                                posts: [...prevPosts.posts, { reelUrl: downloadURL, likes: [], comments: [], userId: user.uid }]
                            });
                        } else {
                            await setDoc(doc(db, 'posts', user.uid), {
                                posts: [{ reelUrl: downloadURL, likes: [], comments: [], userId: user.uid }]
                            });
                        }
                    });
                }
            );
        } else {
            alert("Please select a video file");
        }
    }

    return (
        <>
            {
                error !== '' ? <div className="error"> {error} </div> :
                    <>
                        <div className="upload-cont">
                            <img onClick={clickInput} className="upload-img" src={uploadImg} alt="upload video" />
                            <input type="file" ref={hiddenFileInput} onChange={(e) => handleUpload(e)} style={{ display: 'none' }} />
                        </div>
                        {loading && <div> uploading video ... </div>}
                    </>
            }
        </>
    )
}

export default Upload;