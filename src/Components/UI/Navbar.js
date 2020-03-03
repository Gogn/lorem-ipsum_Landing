import React from 'react'
import '../../index.css'
import {useMediaQuery} from 'react-responsive'

export const Navbar = ({isDesktop}) => {
  return (
    <div>
      <div className="wrapper">
        <div className='navbar'>
          <div className="logo">
            <a href="/">
              <img src="/img/LOGO.png" alt="logo"/>
            </a>
          </div>
          <div className="nav">

            {isDesktop &&
            <div>
              <div className="nav-elem">
                <a href="/">8 499 999 99 99</a>
              </div>
              <div className="nav-elem">
                <p>In</p>
                <p>Vk</p>
              </div>
            </div>
            }

            <p>Men</p>
          </div>
        </div>
      </div>
    </div>
  )
}