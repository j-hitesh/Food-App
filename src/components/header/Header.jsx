// import './Header.css';

const Header = () => {
  return (
    <div className='bg-red-700  h-120 rounded-md text-white lg:m-10 mx-5 mt-5'>
      <div>
        <div className="lg:flex lg:justify-between items-center lg:p-8 p-3">
          <div className="xl:text-xl lg:text-lg text-sm">
            <h2 className="font-Tektur">Are You Starving?</h2>
            <p className="font-Tektur">Within a few clicks, find meals that are accessible near you</p>
          </div>
          <div className="lg:w-80 pt-7">
            <video loop autoPlay 
            disablePictureInPicture
            className="rounded-xl">
              <source src="https://cdn.dribbble.com/users/319371/screenshots/11984807/media/05cad6c3ffff65f9142bf2958b941171.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    
        <button className="animate-bounce bg-cyan-200 text-black p-2 rounded-md text-2xl hover:text-red-500 ml-6 mt-6">
          <a href="#menu" className="text-2xl">View Menu</a>
          </button>
      
    </div>
  );
}

export default Header;
