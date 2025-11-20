import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ThemeProvider } from '../../Context/ThemeContext'
import ProductInfo from '../ProductInfo/ProductInfo'
import Footer from '../Footer/Footer'
const DynamicProduct = () => {
  return (
    <ThemeProvider>
         <Navbar/>
         <ProductInfo/>
         <Footer/>
    </ThemeProvider>
  )
}

export default DynamicProduct
