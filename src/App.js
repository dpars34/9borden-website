import styles from './App.module.css'
import AboutUs from './Components/AboutUs/AboutUs'
import Access from './Components/Access/Access'
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import InstagramFeed from './Components/InstagramFeed/InstagramFeed'
import Menu from './Components/Menu/Menu'
import MenuTitle from './Components/MenuTitle/MenuTitle'


function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <InstagramFeed />
      <MenuTitle />
      <Menu />
      <Carousel />
      <Access />
      <Footer />
    </div>
  )
}

export default App;
