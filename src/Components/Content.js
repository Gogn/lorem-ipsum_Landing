import React from 'react'
import '../index.css'
import LeftBracket from "./UI/svg/LeftBracket.svg.js";
import RightBracket from "./UI/svg/RightBracket.svg.js";

export const Content = () => {
  return (
    <div className='flex-row-content'>
      <LeftBracket/>
      <div className="flex-row-content">
        <div>
          <h2>Лоремова</h2>
          <h3>ипсума анатольевна</h3>
        </div>
          <img src="/img/Ellipse%201.jpg" alt="" className="img-round"/>
      </div>
      <RightBracket/>
    </div>
  )
}