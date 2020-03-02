import React from 'react'
import '../index.css'
import {Content} from "./Content";
import {Navbar} from "./UI/Navbar";
import {Header} from "./Header";
import {Commercial} from "./Commercial";
import {Footer} from "./Footer";

export const Home = () => {
  return (
    <div className='home'>
      {/*<div className='header'>*/}
      {/*  <div className="wrapper">*/}
          <Navbar/>
          <Header/>
        {/*</div>*/}
      {/*</div>*/}
      <h2>Второй блок</h2>
      <div className="wrapper">
        <Content/>
      </div>
      <Commercial/>
      <Footer/>
    </div>
  )
}