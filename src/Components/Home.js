import React, {useState} from 'react'
import '../index.css'
import {useMediaQuery} from 'react-responsive'
import {Content} from "./Content";
import {Navbar} from "./UI/Navbar/Navbar";
import {Header} from "./Header";
import {Commercial} from "./Commercial";
import {Footer} from "./Footer";

export const Home = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 600px)'
  })

  const [menu, setMenu] = useState(false)

  return (
    <div className='home'>
      <Navbar isDesktop={isDesktopOrLaptop} menu={menu} setMenu={setMenu}/>
      <Header isDesktop={isDesktopOrLaptop}/>
      <h2 style={{textAlign: 'center'}}>Второй блок</h2>
      <div className="wrapper">
        <Content isDesktop={isDesktopOrLaptop}/>
      </div>
      <Commercial isDesktop={isDesktopOrLaptop}/>
      <div className="wrapper">
        <Footer/>
      </div>
    </div>
  )
}