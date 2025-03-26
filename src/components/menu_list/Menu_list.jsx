import PropTypes from 'prop-types';
// import './menu_list.css';
import { menu_list } from '../../assets/assets';

const Menu_list = ({ category, setcategory }) => {
  return (
    <div className='m-10'>
      <h1 className='my-6 text-4xl font-Ga-Maamli'>What would you like to order</h1>
      <div className="flex flex-wrap justify-evenly lg:flex lg:flex-row lg:gap-10 lg:justify-center">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setcategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className="relative "
          >
            <img className={category === item.menu_name ? "active" : "bg-red-600 rounded-full border-3 shadow-xl shadow-gray-500/50 "} src={item.menu_image} alt={item.menu_name} />
            <p className='text-transparent w-full h-30 text-center absolute  hover:text-red-700 hover:bg-cyan-500/20 top-2 rounded-full text-xl font-Sour-Gummy '>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Menu_list.propTypes = {
  category: PropTypes.string.isRequired,
  setcategory: PropTypes.func.isRequired,
};

export default Menu_list;
