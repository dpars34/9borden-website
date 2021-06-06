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

    const openMenu = () => {
        setMenuOpen(true)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }
  
    useEffect(() => {
  
      window.onscroll = () => {
        if (window.scrollY >= window.innerHeight) {
          setOnHomeScreen(false)
          setfirstLoadNavbar(false)
        }
        if (window.scrollY < window.innerHeight) {
          setOnHomeScreen(true)
        }
      }
  
    }, [onHomeScreen])

  return (
    <div>
      <Header menuOpen={menuOpen} onHomeScreen={onHomeScreen} firstLoadNavbar={firstLoadNavbar} openMenu={openMenu} closeMenu={closeMenu}/>
      <AboutUs menuOpen={menuOpen} openMenu={openMenu} closeMenu={closeMenu}/>
      <InstagramFeed />
      <MenuTitle />
      <Menu />
      <Carousel />
      <Access />
      <Footer />
    </div>
  )
}

export default App
