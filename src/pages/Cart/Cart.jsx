import { useContext } from 'react';
// import './Cart.css';
import { Context } from '../../components/context/Context';
import { food_list } from '../../assets/assets';

const Cart = () => {
  const { cartItem, removeCart, getTotalCartAmount } = useContext(Context);

  if (getTotalCartAmount() === 0) {
    return (
      <div className="text-center text-2xl mx-10 my-30 h-117 lg:h-211 xl:h-70">
        <h2 className='font-Ga-Maamli'>Your Cart Is Empty</h2>
        <img className='w-90 border-1 border-gray-500 rounded-lg shadow-md shadow-gray-500/50 mx-auto block my-8 '  src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="Empty Cart" />
      </div>
    );
  }

  return (
    <div className='sm:mx-10 my-30 h-auto'>
      <div className='xl:flex xl:gap-x-30 ' >
        <div >
          {/* <div className="flex justify-between">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div> */}
         
          {food_list.map((item) => {
            if (cartItem[item._id] > 0) {
              return (
                <div key={item._id}>
                  <hr />
                  <div className="flex justify-between shadow-md shadow-gray-500/50 mb-4 p-4 rounded-md text-xl xl:w-200 ">
                    <img className='w-30' src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p className='hidden lg:contents ' >₹{item.price}</p>
                    <p >{cartItem[item._id]}</p>
                    <p>₹{item.price * cartItem[item._id]}</p>
                    <p className='cursor-pointer ' onClick={() => removeCart(item._id)}><i class="fa-solid fa-trash"></i></p>
                  </div>
                  
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="mt-8 flex ">
          <div className='text-xl w-100 '  >
            <h2 className='text-3xl mb-4 text-red-700'>Cart Totals</h2>
            <div>
              <div className='flex justify-between mb-2' >
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className='flex justify-between mb-2' >
                <p>Delivery Fee</p>
                <p>₹{25}</p>
              </div>
              <hr />
              <div className='flex justify-between mb-2' >
                <b>Total</b>
                <b>₹{getTotalCartAmount() + 25}</b>
              </div>
            </div>
            <button className='cursor-pointer py-3 px-4 text-lg bg-red-700 rounded-xl text-white text-md shadow-xl shadow-gray-500/50 transition-all hover:shadow-lg mt-8  '>Proceed to pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
