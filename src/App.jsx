import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/footer/Footer'
import Cart from './pages/Cart/Cart'
import Reviews from './pages/Reviews/Reviews'
import SignIn from './pages/logIn/SignIn'
import Sign from './pages/signIn/Sign'
import PaymentOption from './pages/payment/PaymentOption'


const App = () => {
  return (
    <>
      <div className='app'>
       
        <Navbar />
          <Routes>
            < Route path='/'element = {<Home/>}></Route>
            < Route path='/Cart'element = {<Cart/>}></Route>
            < Route path='/Reviews' element= {<Reviews/>}></Route>
            < Route path='/login' element= {<SignIn/>}></Route>
            <Route path='/signIn' element= {<Sign/>}></Route>
            <Route path='/PaymentOption' element ={<PaymentOption/>} ></Route>
          </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
