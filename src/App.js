import React, { useState, useEffect } from 'react'
import AboutUs from './Components/AboutUs/AboutUs'
import Access from './Components/Access/Access'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import InstagramFeed from './Components/InstagramFeed/InstagramFeed'
import Menu from './Components/Menu/Menu'
import MenuTitle from './Components/MenuTitle/MenuTitle'


function App() {

  const [ menuOpen, setMenuOpen ] = useState(false)
  const [ onHomeScreen, setOnHomeScreen ] = useState(true)
  const [ firstLoadNavbar, setfirstLoadNavbar ] = useState(true)
  const [ isEnglish, setIsEnglish ] = useState(false)


  const openMenu = () => {
      setMenuOpen(true)
  }

  const closeMenu = () => {
      setMenuOpen(false)
  }

  const toEnglish = () => {
    setIsEnglish(true)
  }

  const toJapanese = () => {
    setIsEnglish(false)
  }
  
   useEffect(() => {
  
    window.onscroll = () => {
      if (window.scrollY >= (window.innerHeight - 150)) {
        setOnHomeScreen(false)
        setfirstLoadNavbar(false)
      }
      if (window.scrollY < (window.innerHeight - 150)) {
        setOnHomeScreen(true)
      }
    }
  }, [onHomeScreen])

  return (
    <div>
      <Header menuOpen={menuOpen} onHomeScreen={onHomeScreen} firstLoadNavbar={firstLoadNavbar} openMenu={openMenu} closeMenu={closeMenu} toEnglish={toEnglish} toJapanese={toJapanese} isEnglish={isEnglish}/>
      <AboutUs menuOpen={menuOpen} openMenu={openMenu} closeMenu={closeMenu} toEnglish={toEnglish} toJapanese={toJapanese} isEnglish={isEnglish}/>
      <InstagramFeed />
      <MenuTitle isEnglish={isEnglish}/>
      <Menu isEnglish={isEnglish}/>
      <Carousel />
      <Access isEnglish={isEnglish}/>
      <Footer />
    </div>
  )
}

export default App
