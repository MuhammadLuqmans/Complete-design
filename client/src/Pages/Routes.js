import React, { useState } from 'react'
import Home from './Home'
import Grills from './Grills'
import { Box } from '@material-ui/core'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Static/Navbar'
import MobileNavbar from '../Components/Static/MobileNav'
import Footer from '../Components/Static/Footer'
import "./Layout.css"
import SendForm from '../Components/Private/SendForm'
import ShowAllPost from '../Components/Private/ShowAllPost'
import AllProducts from './AllProducts'
import HomeFooter from '../Components/HomeComponents/FooterBanner';
import Plus from './Plus'
import Product from '../Components/Products/Product'
import LoginForm from '../Components/Forms/Login'



const Layout =()=>{
    const [ isEditing , setIsEditing ] = useState(false);
    // console.log(isEditing)
    return(
        <div>
        <div className='DesktopNav'>
        <Navbar />
        </div>
        <div className='MobileNav'>
        <MobileNavbar />
        </div>
        <Routes>
        <Route excet path='/' element={<Home />}/>
        <Route excet path="/grills" element={<Grills />} />
        <Route excet path='/add-products/:id' element={<SendForm isEditing={ isEditing } setIsEditing={setIsEditing} />}/>
        <Route excet path='/all-products' element={<ShowAllPost setIsEditing={setIsEditing} />}/>
        <Route excet path='/allproducts' element={<AllProducts />} />
        <Route excet path='/plus' element={<Plus />} />
        <Route path='/product' element={<Product />} />
        </Routes>
        <div>
        <HomeFooter />
        <Footer />
        </div>
        </div>
    )
}

export default Layout