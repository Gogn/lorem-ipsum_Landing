import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card} from "./UI/Card";
import {ButtonSmall} from "./UI/ButtonSmall";

export const Commercial = ({isDesktop}) => {

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
        <h2 style={{textAlign: 'center'}}>Третий блок</h2>

        {!isDesktop &&
        <div className='flex-row-content flex-wrap flex-justify-center'>
          <div className='button-year'><ButtonSmall text={'2019'}/></div>
          <div className='button-year'><ButtonSmall text={'2018'}/></div>
          <div className='button-year'><ButtonSmall text={'2017'}/></div>
          <div className='button-year'><ButtonSmall text={'2016'}/></div>
          <div className='button-year'><ButtonSmall text={'2015'}/></div>
          <div className='button-year'><ButtonSmall text={'2014'}/></div>
          <div className='button-year'><ButtonSmall text={'2013'}/></div>
          <div className='button-year'><ButtonSmall text={'2012'}/></div>
          <div className='button-year'><ButtonSmall text={'2011'}/></div>
        </div>
        }

        <div className="flex-content" style={{marginTop: "15px"}}>

          {companies.map((company, i) => (
            <Card company={company} key={i}/>
          ))}
          {companies.map((company, i) => (
            <Card company={company} key={i+1}/>
          ))}

        </div>
      </div>
    </div>
  )
}