import React from 'react'
import {Link} from "react-router-dom";

export const Card = ({company}) => (
  <div className='card'>
    <img src={company.imgSrc} alt={company.name} className='card-img-top' />
    <div className='card-body'>
      <p className='card-title'>{company.name}</p>
      <p className='content__p'>{company.info}</p>
      {/*<Link to={'/company/' + company.name} className='' >Открыть</Link>*/}
    </div>
  </div>
)

