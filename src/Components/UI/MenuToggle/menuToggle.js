import React from 'react';
import classes from './menuToggle.module.css'

const MenuToggle = props => {
  const cls = [
    classes.MenuToggle,
  ]

  if (props.isOpen) {
    cls.push(classes.close)
  } else {
    cls.push(classes.open)
  }

  return (
    <i
    className={cls.join(' ')}
    onClick={props.onToggle}
    />
  )
}

export default MenuToggle