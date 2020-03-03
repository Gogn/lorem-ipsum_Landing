import React from 'react'
import '../index.css'

export const Header = ({isDesktop}) => {

  let orderUl
  {isDesktop ? orderUl = {order: 3} : orderUl = {order: 4}}
  let orderButton
  {isDesktop ? orderButton = {order: 4} : orderButton = {order: 3}}

  return (
    <>
      <div className='header'>
      </div>
        <div className="wrapper">
          <div className="flex-column-content">
            <h1 style={{order: 1}}>lorem ipsum dolor sit amet</h1>
            <p className='headline' style={{order: 2}}>lorem <span>ipsum dolor sit amet</span></p>
            <ul style={orderUl}>
              <li> <img src="/img/1st.svg" alt="1st"/> &nbsp; <img src="/img/planet.svg" alt="planet"/> <span>lorem ipsum dol</span></li>
              <li> <img src="/img/2st.svg" alt="2st"/> &nbsp; <img src="/img/eu.svg" alt="eu"/> <span>lorem ipsum</span></li>
              <li> <img src="/img/3st.svg" alt="3st"/> &nbsp; <img src="/img/eu.svg" alt="eu"/> <span>lorem ipsum dolor sit amet</span></li>
              <li> <img src="/img/2st.svg" alt="2st"/> &nbsp; <img src="/img/rus.svg" alt="rus"/> <span>lorem ipsum</span></li>
            </ul>
            <button className='main-button' style={orderButton}>
              Lorem ipsum dolor
            </button>
        </div>
      </div>
    </>
  )
}