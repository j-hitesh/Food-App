import { useState } from 'react';
// import './home.css';
import Header from '../../components/header/Header';
import Menu_list from '../../components/menu_list/Menu_list';
import FoodList from '../../components/food_list/food_list';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='home'>
      <Header />
      <Menu_list category={category} setcategory={setCategory} />
      <FoodList category={category} />
    </div>
  );
}

export default Home;
