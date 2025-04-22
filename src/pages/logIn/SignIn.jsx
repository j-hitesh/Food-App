import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import Navbar from '../navbar/Navbar'


const SignIn = () => {
  const [showSign, setShowSign] = useState("showSign");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;

    if (emailRegex.test(input)) {
      setMessage("You entered a valid email.");
      
      
    } else if (phoneRegex.test(input)) {
      setMessage("You entered a valid phone number.");
    } else {
      setMessage("Please enter a valid email or phone number.");
    }
  };
  return (
    <div className='w-120 h-100 mx-auto mt-30 shadow-lg rounded-lg bg-orange-100'>
      <h1 className='text-5xl text-center text-red-600 text-lg pt-10 mt-20'>LOG IN</h1>
      <form className='flex flex-col items-center mt-10'>
        <input type="text" placeholder='Gmail & Number' className='border border-gray-300 rounded-lg p-2 mb-4 w-90 bg-white'
         value={input}
         onChange={(e) => setInput(e.target.value.trim())}
        required min={9}  />
        {message && <p>{message}</p>}
        <input type="password" placeholder='Password' className='border border-gray-300 rounded-lg p-2 mb-4 w-90 bg-white' required />
        
        <button  onClick={handleSubmit} className='bg-blue-500 text-white px-39 py-2 rounded-lg' id='login'>Log In</button>
          <p className='text-center pt-2 '>OR</p>
        <button type="button" className='bg-red-700 text-white px-39 py-2 rounded-lg mt-4' onClick={() => setShowSign("sign") }>
          <Link to='/signIn'>Sign In</Link>
        </button>
      </form>
    </div>
  )
}

export default SignIn
