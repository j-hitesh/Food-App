import { useState} from 'react';
import React from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';



const Header = () => {
  const [menu, setMenu] = useState("menu");
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showSign, setShowSign] = useState("showSign");
 
  

 const menushow = () => {
  if (!showMenuBar) {
    setShowMenuBar(true);
    // console.log(showMenuBar);
  }
  else if(showMenuBar) {
    setShowMenuBar(false);
    // console.log(showMenuBar);
  }

   
};

  return (
    <div className='flex justify-between w-full h-15 sm:h-auto bg-gray-700  text-white px-4 py-4 rounded-b-lg fixed top-0 z-10 mb-10 '>
       {/* <h1 className='bg-pink-500'>check tailwind</h1> */}
      {/* <img  src={assets.logo} alt="logo" className="w-12" /> */}
      <div>
       <button onClick={menushow} className='block sm:hidden'><i className="fa-solid fa-bars fixed top-5"></i></button>
      <ul className={`top-8 shadow-xl shadow-gray-400 rounded-r-lg -left-5 pt-5 relative px-5 w-70 text-2xl  ${showMenuBar ? 'h-screen bg-gray-700 sm:hidden ' : 'hidden'}`}>
        <li onClick={() => setMenu("Home")} className= {menu === "Home" ? "active , text-red-700" : "font-Tinos  hover:text-red-500"}> <Link to='/'>
          <button onClick={menushow} >Home</button>
         </Link></li>
        <li onClick={() => setMenu("Reviews")} className={menu === "Reviews" ? "active, text-red-700" : " font-Tinos hover:text-red-500"}><Link to='/Reviews'>
        <button onClick={menushow} >Reviews</button>
        </Link></li>
        <li onClick={() => setMenu("Cart")} className={menu === "Cart" ? "active, text-red-700" : "font-Tinos hover:text-red-500"}><Link to='/Cart'> 
        <button onClick={menushow} >Cart</button>
        </Link></li>
      </ul>
      </div>
      <ul className="sm:flex gap-x-12  w-1/2 text-md lg:text-2xl sm:text-xl hidden pr-400 ">
        <li onClick={() => setMenu("Home")} className= {menu === "Home" ? "active, text-red-700" : "font-Tinos hover:text-red-500"}> <Link to='/'>Home</Link></li>
        <li onClick={() => setMenu("Reviews")} className={menu === "Reviews" ? "active, text-red-700" : " font-Tinos hover:text-red-500"}><Link to='/Reviews'>Reviews</Link></li>
        <li onClick={() => setMenu("Cart")} className={menu === "Cart" ? "active, text-red-700" : "font-Tinos hover:text-red-500"}><Link to='/Cart'> Cart</Link></li>
      </ul >
      
      
      <div className='flex gap-x-4 fixed right-4 top-3'>
        <button 
          onClick={() => setShowSign("login")}
        className='bg-red-500 px-3 py-2 rounded-xl text-xs xl:text-xl hover:text-red-500 hover:bg-blue-400'><Link to="login">Log-in</Link></button>
        {/* <h5 >
          {UserName.name}
        </h5> */}
      </div>
       
    </div>
  );
};

export default Header;
