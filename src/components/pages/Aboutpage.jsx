import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ThemeProvider } from '../../Context/ThemeContext'
import Footer from '../Footer/Footer'
const Aboutpage = () => {
  return (
    
    <ThemeProvider>
      <Navbar/>
      About Page
      <Footer/>
    </ThemeProvider>
  )
}

export default Aboutpage
