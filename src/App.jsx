import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/footer/Footer'
import Cart from './pages/Cart/Cart'
import Reviews from './pages/Reviews/Reviews'

const App = () => {
  return (
    <>
      <div className='app'>
       
        <Navbar />
          <Routes>
            < Route path='/'element = {<Home/>}></Route>
            < Route path='/Cart'element = {<Cart/>}></Route>
            < Route path='/Reviews' element= {<Reviews/>}></Route>
          </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
