import React, { useState } from 'react'
import { storage } from '../firebase'
 
function Firestorage() {
    const [file, setFile] = useState('');

    let fileUpload = () => {
        console.log(file);
        const uploadTask = storage.ref(`/data/${ file.name }`).put(file);
        uploadTask.on('state_changed', fn1, fn2, fn3);                                                          // listener    fn1 - Progress | fn2 - Error | fn3 - success
        
        function fn1(snapshot) {                                                                                // snapshot tells who much work done till now
            let progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
            console.log(`upload is ${ progress } done`);
        }

        function fn2(error) { 
            console.log("error", error);
        }

        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                console.log(url)
            })
        }
    }

    return (
        <>
            <h1> Store file using firestorage </h1>
            <label htmlFor = "file" > File : </label>
            <input type = "file" accept = "images/*" onChange = { (e) => setFile(e.target.files[0]) } />
            <button onClick = { fileUpload } > Upload </button>
        </>
    )
}

export default Firestorage