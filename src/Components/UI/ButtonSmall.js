import React from 'react'

export const ButtonSmall = ({text}) => {
  return (
    <div style={{height: '40px'}}>
      <button className='button-small'>{text}</button>
    </div>
  )
}