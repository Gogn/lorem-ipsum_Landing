import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card} from "./UI/Card";

export const Commercial = () => {

  const companies = [
    {
      name: 'Lorem ipsum dolor sit amet.',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nulla interdum felis placerat vulputate.',
      imgSrc: '/img/f.jpg'
    },
    {
      name: 'Lorem ipsum dolor sit amet.',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nulla interdum felis placerat vulputate.',
      imgSrc: '/img/a.jpg'
    },
    {
      name: 'Lorem ipsum dolor sit amet.',
      info: '',
      imgSrc: '/img/s.jpg'
    },
    {
      name: 'Lorem ipsum dolor sit amet.',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nulla interdum felis placerat vulputate.',
      imgSrc: '/img/ae.jpg'
    },
  ]

  return (

    <div className='commercial'>
      <div className='wrapper'>
      <h2>Третий блок</h2>
      <div className="flex-content">

      {companies.map((company) => (
      <Card company={company}/>
      ))}
        {companies.map((company) => (
          <Card company={company}/>
        ))}

      </div>
    </div>
    </div>
  )
}