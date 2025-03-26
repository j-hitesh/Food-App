import { useContext } from 'react';
import PropTypes from 'prop-types';
// import './Fooditem.css';
import { assets } from '../../assets/assets';
import { Context } from '../context/Context';

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItem, addCart, removeCart } = useContext(Context);
  return (
    <div className='shadow-xl xl:w-80 transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 lg:w-69 sm:mx-25'>
      <div  >
        <img className='rounded-t-lg' src={image} alt="img" />
        <div className='p-4 flex align-center gap-x-2 '>
          <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="remove" />
          <p className='text-lg text-center'>{cartItem[id] || 0}</p>
          <img onClick={() => addCart(id)} src={assets.add_icon_green} alt="add" />
        </div>
      </div>
      <div className="p-4 pt-0 text-lg">
        <div >
          <p className='font-Merienda'>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className='font-Caveat' >{description}</p>
        <p className="text-red-700 text-xl">₹{price}</p>
      </div>
    </div>
  );
}

Fooditem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Fooditem;
