import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword} from 'firebase/auth'; 
import { auth,db } from '../../components/firebase/firebase';
import { setDoc,doc } from 'firebase/firestore';




const Sign = () => {
  const [getName, setName] =useState("");
  const [getNumber,setNumber] = useState("");
  const [getGmail, setGmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getMessage, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^[6-9]\d{9}$/;

   
     if (phoneRegex.test(getNumber)) {
      setMessage("You entered a valid phone number.");
        

      createUserWithEmailAndPassword(auth,getGmail, getPassword, getName, getAddress, getNumber)
        .then((userCredential) => {
          
          const user = userCredential.user;                               
          console.log(user);
          if (user){
            const userId = user.uid;
            const userRef = doc(db, "users", userId);
            setDoc(userRef, {
              name: getName,
              number: getNumber,
              gmail: getGmail,
              password: getPassword,
              address: getAddress,
              // photo: getPhoto
            });
          }
          alert("Sign Up Successfully");
          // window.location.href = "/";
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } 
    else {
      setMessage("Please enter a valid phone number.");
    }

  }

  return (
    <div className=' w-90 md:w-120 h-auto mx-auto mt-30 shadow-lg rounded-lg bg-orange-100'>
      <h1 className='text-5xl text-center text-red-600 text-lg pt-10 mt-20'>SIGN IN</h1>
       <form 
         onSubmit={handleSubmit}
       className='flex flex-col items-center mt-10'>
        <p>{getMessage}</p>
        <input 
        onChange={(e) => setName(e.target.value)}
        type="text" placeholder='Name' className='border border-gray-300 rounded-lg p-2 mb-4 w-80 md:w-90 bg-white' required />
        <input 
        onChange={(e) =>setNumber(e.target.value) }
        type="number" placeholder='Number' className='border border-gray-300 rounded-lg p-2 mb-4 w-80 md:w-90 bg-white no-spinner ' required Length={9} />
        <input 
        onChange={(e) =>setGmail(e.target.value) }
        type="gmail" placeholder='Gmail' className='border border-gray-300 rounded-lg p-2 mb-4 w-80 md:w-90 bg-white' />
        <input 
        onChange={(e) =>setPassword(e.target.value)}
        type="password" placeholder='Password' className='border border-gray-300 rounded-lg p-2 mb-4 w-80 md:w-90 bg-white' required />
        <textarea 
        onChange={(e) =>setAddress(e.target.value)}
        placeholder='Address' className='border border-gray-300 rounded-lg p-2 mb-4 w-80 md:w-90 bg-white' required></textarea>

       
        <button type="submit" className='bg-blue-500 text-white px-34 md:px-39 py-2 rounded-lg mb-10'>Sign In</button>
      
        </form>
        
    </div>
  )
}

export default Sign

