import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import { useDispatch } from 'react-redux';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Basket from './assets/components/Basket';
import Home from './assets/components/Home/Home';
import WishList from './assets/components/wishList';
import Login from './assets/components/Login/Login';
import SignUp from './assets/components/SignUp/SignUp';






const App = () => {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Home />} />
      <Route exact path='/basket' element = {<Basket/>} />
      <Route exact path='/wishlist' element = {<WishList/>}/>
      <Route exact path='/login' element ={<Login/>}/>
      <Route exact path='/signup' element ={<SignUp/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
