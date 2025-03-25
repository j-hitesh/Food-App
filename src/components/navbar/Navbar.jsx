import { useState } from 'react';
// import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className='flex justify-between w-full bg-gray-700  text-white p-4'>
       {/* <h1 className='bg-pink-500'>check tailwind</h1> */}
      {/* <img  src={assets.logo} alt="logo" className="w-12" /> */}
      <ul className="flex gap-x-12  w-1/2 text-4xl ">
        <li onClick={() => setMenu("Home")} className= {menu === "Home" ? "active" : "font-Tinos hover:text-red-500"}> <Link to='/'>Home</Link></li>
        <li onClick={() => setMenu("Reviews")} className={menu === "Reviews" ? "active" : " font-Tinos hover:text-red-500"}><Link to='/Reviews'>Reviews</Link></li>
        <li onClick={() => setMenu("Cart")} className={menu === "Cart" ? "active" : "font-Tinos hover:text-red-500"}><Link to='/Cart'> Cart</Link></li>
      </ul>
      <div className='flex gap-x-4'>
        <button className='bg-red-500 px-3 py-2 rounded-xl text-2xl hover:text-red-500 hover:bg-blue-400'>Sign-up</button>
        <button className='bg-red-500 px-3 py-2 rounded-xl text-2xl hover:text-red-500 hover:bg-blue-400'>Log-in</button>
      </div>
    </div>
  );
};

export default Header;
