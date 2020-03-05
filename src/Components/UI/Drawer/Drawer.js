import React, {Component} from 'react';
import classes from './Drawer.module.css'
import Backdrop from "../Backdrop/Backdrop";

class Drawer extends Component {

  renderLinks() {

    const links = [
      {to: '/', label: 'пункт меню 1'},
      {to: '/', label: 'пункт меню 2'},
      {to: '/', label: 'пункт меню 3'},
      {to: '/', label: 'пункт меню 4'},
      {to: '/', label: 'пункт меню 5'},
    ]

    return links.map((link, index) => {
      return (
        <li key={index}>
          <a
            href={link.to}
            onClick={this.props.onClose}
          >
            {link.label}
          </a>
        </li>
      )
    })
  }

  desktopMenu() {
    return (
      <div>
        {this.renderLinks()}
      </div>
    )
  }

  mobileMenu() {
    return (
      <div className='flex-align-center flex-column-content' style={{width: '100vw', height: '80vh'}}>
        <div className="nav-elem flex-align-center">
          <img src="/img/phone.svg" alt="phone"/>
          <a href="/">&nbsp;&nbsp;8 499 999 99 99</a>
        </div>

        {this.renderLinks()}
        <div className="nav-elem" style={{width: '100px'}}>
          <p><img src="/img/ins.svg" alt="instagram"/></p>
          <p><img src="/img/vk.svg" alt="VK"/></p>
        </div>
      </div>
    )
  }

  render() {
    const cls = [classes.Drawer]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>
            {this.props.isDesktop ? this.desktopMenu() : this.mobileMenu()}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
      </>
    )
  }
}

export default Drawer