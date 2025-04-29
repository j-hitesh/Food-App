import React from 'react'
import { useState, useEffect } from 'react';
import { auth, db } from '../../components/firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';

const User = () => {
  const [userName, getUserName] = useState(null);

  const fetchUserName = async (user) => {
    auth.onAuthStateChanged(async () => {
      console.log(user);
      if (user) {
        const userId = user.uid;
        const userRef = doc(db, "users", userId);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          getUserName(docSnap.data());
          console.log("Document data:", docSnap.data());
        }
      } else {
        console.log("No user is signed in.");
      }
    });

    useEffect(() => {
      fetchUserName();
    }, []);
  }
  return (
    <div className='w-90 md:w-120 h-100 mx-auto mt-30 shadow-lg rounded-lg bg-orange-100'>
      {userName ? (
        <h1>{userName.name}</h1>
      ) : (
        <h1>
          No name found
        </h1>
      )}
    </div>
  )
}

export default User
