import React from 'react'
import Slider from "react-slick";
import '../index.css'
import LeftBracket from "./UI/svg/LeftBracket.svg.js";
import RightBracket from "./UI/svg/RightBracket.svg.js";

export const Content = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true
  };
  return (
    <div className='flex-row-content'>
      <div>
        <LeftBracket/>
      </div>
      {/*<div className="flex-row-content">*/}
      <Slider {...settings} className='slider'>
        <div>
          <div className="flex-row-content">
            <div>
              <h2>Лоремова</h2>
              <h3>ипсума анатольевна</h3>
              <span className='content__span'>lorem ipsum dolor</span>
              <ul className="ul-content">
                <li>lorem ipsum dolor lorem ipsum</li>
                <li>lorem ipsum dolor</li>
                <li>lorem ipsum dolor lorem ipsum dolor</li>
                <li>lorem ipsum dolor</li>
                <li>lorem ipsum dolor</li>
                <li>lorem ipsum dolor</li>
              </ul>
              <div>
                <p style={{fontWeight: 'bold'}}>lorem ipsum dolor</p>
                <p className='content__p'>lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
                  ipsum
                  dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
              </div>
              <div>
                <p style={{fontWeight: 'bold'}}>lorem ipsum dolor</p>
                <p className='content__p'>lorem ipsum dolor lorem ipsum dolor</p>
              </div>
            </div>
            <div>
              <img src="/img/Ellipse%201.jpg" alt="" className="img-round"/>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-row-content">
            <div>
              <h2>Картошка</h2>
              <h3>Улыбачевна</h3>
              <span className='content__span'>lorem ipsum dolor</span>
              <ul className="ul-content">
                <li>фывlorem ipsum dolor lorem ipsum</li>
                <li>lвыфorem ipsum dolor</li>
                <li>фывlorem ipsum dolor lorem ipsum dolor</li>
                <li>выфlorem ipsum dolor</li>
                <li>фывlorem ipsum dolor</li>
                <li>выфlorem ipsum dolor</li>
              </ul>
              <div>
                <p style={{fontWeight: 'bold'}}>lorem фыв ipsum dolor</p>
                <p className='content__p'>lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
                  ipsum
                  dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
              </div>
              <div>
                <p style={{fontWeight: 'bold'}}>lorem фыв ipsum dolor</p>
                <p className='content__p'>lorem ipsum dolor lorem ipsum dolor</p>
              </div>
            </div>
            <div>
              <img src="/img/Ellipse%201.jpg" alt="" className="img-round"/>
            </div>
          </div>
        </div>

        <div>
          <p><h2>3</h2></p>
        </div>

        <div>
          <p><h2>Hire me</h2></p>
        </div>

        <div>
          <p><h2>Works like a charm</h2></p>
        </div>

      </Slider>
      {/*</div>*/}
      <div>
        <RightBracket/>
      </div>
    </div>
  )
}