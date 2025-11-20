import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Trending from './components/Trends/Trending'
import { ThemeProvider } from './Context/ThemeContext'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Toaster position='top-center' />
           <Navbar/>
           <Hero/>
           <Trending/>    
           <Footer/>    
       </ThemeProvider>
    </div>
  )
}

export default App

