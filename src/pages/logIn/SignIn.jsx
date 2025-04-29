import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth, db } from '../../components/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getDoc, doc } from 'firebase/firestore';



const SignIn = () => {
  const [showSign, setShowSign] = useState("showSign");
  // const [message, setMessage] = useState("");
  const [getGmail, setGmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [userName, getUserName] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, getGmail, getPassword);
      const user = userCredential.user;
      console.log(user);
      alert("Login Successful");
      
      if (user) {
        const userId = user.uid;
        console.log(userId);
        const userRef = doc(db, "users", userId);
        
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          getUserName(docSnap.data());
          console.log("Document data:", docSnap.data());
          // window.location.href = "/User";
        } else {
          console.log("No such document!");
        }
  
        // Optionally redirect
      }
    } 
    catch (error) {
      console.error("Error signing in:", error.message);
      alert(error.message);
    }
  };
  
return (
  <div className='w-90 md:w-120 h-100 mx-auto mt-30 shadow-lg rounded-lg bg-orange-100'>
    <h1 className='text-5xl text-center text-red-600 text-lg pt-10 mt-20'>LOG IN</h1>
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center mt-10'>
      <input type="email" placeholder='Enter Your Gmail' className='border border-gray-300 rounded-lg p-2 mb-4 w-80 md:w-90 bg-white'
        onChange={(e) => setGmail(e.target.value)}
        required />

      <>
        {userName ? (
          <h1> Hello {userName.name}</h1>
        ) : (
          <h1>
          
          </h1>
        )}
      </>
      <input type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password' className='border border-gray-300 rounded-lg p-2 mb-4 w-80 md:w-90 bg-white' required />

      <button type='submit' className='bg-blue-500 text-white px-34 md:px-39 py-2 rounded-lg' id='login'>Log In</button>
      <p className='text-center pt-2 '>OR</p>
      <button type="button" className='bg-red-700 text-white px-34 md:px-39 py-2 rounded-lg mt-4' onClick={() => setShowSign("sign")}>
        <Link to='/signIn'>Sign In</Link>
      </button>
    </form>
  </div>
)
}

export default SignIn
