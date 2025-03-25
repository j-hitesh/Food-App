// import './Header.css';

const Header = () => {
  return (
    <div className='bg-red-700  h-120 rounded-md text-white m-10'>
      <div>
        <div className="flex justify-between items-center p-8">
          <div className="text-xl">
            <h2 className="font-Tektur">Are You Starving?</h2>
            <p className="font-Tektur">Within a few clicks, find meals that are accessible near you</p>
          </div>
          <div className="w-80 pt-7">
            <video loop autoPlay 
            disablePictureInPicture
            className="rounded-xl">
              <source src="https://cdn.dribbble.com/users/319371/screenshots/11984807/media/05cad6c3ffff65f9142bf2958b941171.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    
        <button className="animate-bounce bg-cyan-200 text-black p-2 rounded-md text-2xl hover:text-red-500 ml-6 mt-4">
          <a href="#menu" className="text-2xl">View Menu</a>
          </button>
      
    </div>
  );
}

export default Header;
