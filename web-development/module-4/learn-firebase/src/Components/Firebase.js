import React, { useEffect, useState } from 'react'
import { database } from '../firebase';

export default function Firebase() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    let createUserInDb = async () => {
        let response = await database.users.add({ name, age });                                                 // [ CREATE ]  incase if we need to give our known uid then we could write like: let response = await database.users.doc('10001').set({ name, age })
        // console.log(response);
    }

    useEffect(() => {
        async function fetchData() {
            let uid = 'ZVwQdQnPQIDDpl3eNPrL';
            let allUserInfoArr = await database.users.get();  
            allUserInfoArr.forEach((userObj) => { console.log(userObj.data()) });                               
        }
        fetchData();
    }, [])

    // useEffect( async () => {
    //     let uid = 'ZVwQdQnPQIDDpl3eNPrL';
    //     // let userInfo = await database.users.doc(uid).get();
    //     // console.log(userInfo.data());
    //     let allUserInfoArr = await database.users.get();                                                        // [ READ ]
    //     allUserInfoArr.forEach((userObj) => console.log(userObj.data()))
    //     // let sortedUserData = await database.users.orderBy('createdAt','desc').get()                          // inorder to get data in sorted order as per fild createdAt 
    //     // onSnapShot - it gets attach as like an event listener such that wheneven there is an update or change in users data that time it will again runs 
    // })

    let updateUser = async () => {
        let uid = 'ZVwQdQnPQIDDpl3eNPrL';
        await database.users.doc(uid).update({                                                                      // [ Update ]
            name, age 
        });
    }

    let deleteUser = async () => {
        let uid = 'ZVwQdQnPQIDDpl3eNPrL';
        await database.users.doc(uid).delete();
    }

    return (
        <>
            <div>
                <label htmlFor = 'name' > Name </label>
                <input type = 'text' value = { name } onChange = { (e) => setName(e.target.value) } />
                <label htmlFor = 'age'> Age </label>
                <input type = 'number' value = { age } onChange = { (e) => setAge(e.target.value) } />
                <button onClick = { updateUser } > Update </button>
                <button onClick = { deleteUser } ></button>
            </div>
        </>
    )
}
