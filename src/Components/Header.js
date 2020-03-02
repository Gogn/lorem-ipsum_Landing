import React from 'react'
import '../index.css'

export const Header = () => {
  return (
    <>
      <div className='header'>
        <div className="wrapper">
          <div className="flex-column-content">
            <h1>lorem ipsum dolor sit amet</h1>
            <h3>lorem ipsum dolor sit amet</h3>
            <ul>
              <li>lorem ipsum dol</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum dolor sit amet</li>
              <li>lorem ipsum</li>
            </ul>
            <button className='main-button'>
              Lorem ipsum dolor
            </button>
          </div>
        </div>
      </div>
      <button className='main-button'>
        Lorem ipsum dolor
      </button>
    </>
  )
}