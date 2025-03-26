import { useContext } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// import './Food_list.css';
import { Context } from '../context/Context';
import Fooditem from '../fooditem/Fooditem';
import { food_list } from '../../assets/assets';

// console.log(food_list);
const FoodList = ({ category }) => {
  const {} = useContext(Context);
  return (
    <div className='mx-11 my-5' id='menu'>
      <h2 className='mt-6 text-4xl font-Ga-Maamli'>Popular Foods</h2>
      <div className="flex flex-wrap gap-10 pt-12  ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            // console.log(food_list);
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          
          return null;
        })}
      </div>
    </div>
  );
};

// FoodList.propTypes = {
//   category: PropTypes.string.isRequired,
// };

export default FoodList;
