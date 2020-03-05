import React from 'react'

export const Contacts = () => {
  return (
    <div className="nav">
      <div className="nav-elem">
        <img src="/img/phone.svg" alt="phone"/>
        <a href="/">&nbsp;&nbsp;8 499 999 99 99</a>
      </div>
      <div className="nav-elem" style={{width: '100px'}}>
        <p><img src="/img/ins.svg" alt="instagram"/></p>
        <p><img src="/img/vk.svg" alt="VK"/></p>
      </div>
    </div>
  )
}