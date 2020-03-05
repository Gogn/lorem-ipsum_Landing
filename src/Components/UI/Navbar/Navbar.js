import React from 'react'
import '../../../index.css'
import classes from './Navbar.module.css'
import Drawer from "../Drawer/Drawer";
import MenuToggle from "../MenuToggle/menuToggle";
import {Contacts} from "../Contacts";

export const Navbar = ({isDesktop, menu, setMenu}) => {

  const menuHandler = () => {
    setMenu(!menu)
  }

  const cls = [classes.Navbar]

  if (menu) {
    cls.push(classes.NavbarMenu)
  }

  return (
    <div>
      {/*<div className="wrapper">*/}
        <div className={cls.join(' ')}>
          <div className="logo">
            <a href="/">
              <img src="img/LOGO.png" alt="logo"/>
            </a>
          </div>

            {isDesktop &&
            <Contacts/>
            }

            <Drawer isDesktop={isDesktop}
              isOpen={menu}
              onClose={menuHandler}
            />
            <MenuToggle
              onToggle={menuHandler}
              isOpen={menu}
            />

          </div>
        </div>
      // </div>
  )
}