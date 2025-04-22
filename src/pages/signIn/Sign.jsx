import React from 'react'


const Sign = () => {
  return (
    <div className='w-120 h-auto mx-auto mt-30 shadow-lg rounded-lg bg-orange-100'>
      <h1 className='text-5xl text-center text-red-600 text-lg pt-10 mt-20'>SIGN IN</h1>
       <form className='flex flex-col items-center mt-10'>
        <input type="text" placeholder='Name' className='border border-gray-300 rounded-lg p-2 mb-4 w-90 bg-white' required />
        <input type="number" placeholder='Number' className='border border-gray-300 rounded-lg p-2 mb-4 w-90 bg-white no-spinner ' required Length={9} />
        <input type="gmail" placeholder='Gmail' className='border border-gray-300 rounded-lg p-2 mb-4 w-90 bg-white' />
        <input type="password" placeholder='Password' className='border border-gray-300 rounded-lg p-2 mb-4 w-90 bg-white' required />
        <textarea placeholder='Address' className='border border-gray-300 rounded-lg p-2 mb-4 w-90 bg-white' required></textarea>
        
        <button type="submit" className='bg-blue-500 text-white px-39 py-2 rounded-lg mb-10'>Sign In</button>
      
        </form>
        
    </div>
  )
}

export default Sign
