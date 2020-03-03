import React from 'react'
import '../index.css'
import { useMediaQuery } from 'react-responsive'
import {Content} from "./Content";
import {Navbar} from "./UI/Navbar";
import {Header} from "./Header";
import {Commercial} from "./Commercial";
import {Footer} from "./Footer";

export const Home = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 600px)'
  })

  return (
    <div className='home'>
          <Navbar/>
          <Header isDesktop = {isDesktopOrLaptop}/>
      <h2>Второй блок</h2>
      <div className="wrapper">
        <Content isDesktop = {isDesktopOrLaptop}/>
      </div>
      <Commercial isDesktop = {isDesktopOrLaptop}/>
      <Footer/>
    </div>
  )
}