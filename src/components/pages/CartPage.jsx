import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ThemeProvider } from '../../Context/ThemeContext'
import MyCart from '../MyCart/MyCart'
import Footer from '../Footer/Footer'
const CartPage = () => {
  return (
    <ThemeProvider>
      <Navbar/>
      <MyCart/>
      <Footer/>
    </ThemeProvider>
  )
}

export default CartPage
