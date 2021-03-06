import React, {useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'
import LeftBracket from "./UI/svg/LeftBracket.svg.js";
import RightBracket from "./UI/svg/RightBracket.svg.js";
import {ButtonSmall} from "./UI/ButtonSmall";

export const Content = ({isDesktop}) => {

  const [display, setDisplay] = useState(true)

  const displayHandler = () => {
    setDisplay(!display)
  }

  const settings = {
    display: {display: 'none'},
    dots: true,
    dotsClass: 'slider-paging-number',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    customPaging: i => (
      <div>
        {i+1}<span style={{marginLeft: "auto", fontSize: '24px'}}>&nbsp;из&nbsp;5</span>
      </div>
    )
  };
  return (
    <>
      {
        isDesktop ?
          <div className='flex-row-content content-main'>
            <div style={{marginBottom: '12%'}}>
              <LeftBracket/>
            </div>
            <div className='slider'>
              <Slider {...settings} >
                <div>
                  <div className="flex-row-content content">
                    <div style={{maxWidth: '50%'}}>
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
                        <p className='content__p'>lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
                          dolorlorem
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

                <div style={{maxWidth: '50%'}}>
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
                        <p className='content__p'>lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
                          dolorlorem
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
                  <h2>3</h2>
                </div>

                <div>
                  <h2>4</h2>
                </div>

                <div>
                  <h2>Works like a charm</h2>
                </div>

              </Slider>
            </div>
            <div style={{marginBottom: '12%'}}>
              <RightBracket/>
            </div>
          </div>

          :
          <Slider {...settings} className='slider'  style={display === false ? {display: 'none'} : null }>
            <div>
              <div className="flex-column-content flex-align-center">
                <img src="/img/Ellipse%201.jpg" alt="" className="img-round"/>
                <h2>Лоремова</h2>
                <h3>ипсума анатольевна</h3>
                <span className='content__span'>lorem ipsum dolor</span>
                <div style={{width: '156px'}}>
                  <div onClick={displayHandler}>
                    <ButtonSmall text={'скрыть'}/>
                  </div>
                </div>
                <ul className="ul-content">
                  <li>lorem ipsum dolor lorem ipsum</li>
                  <li>lorem ipsum dolor</li>
                  <li>lorem ipsum dolor lorem ipsum dolor</li>
                  <li>lorem ipsum dolor</li>
                  <li>lorem ipsum dolor</li>
                  <li>lorem ipsum dolor</li>
                </ul>
                <div className='flex-self-align-start'>
                  <p style={{fontWeight: 'bold'}}>lorem ipsum dolor</p>
                  <p className='content__p'>lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
                    ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor</p>
                </div>
                <div className='flex-self-align-start'>
                  <p style={{fontWeight: 'bold'}}>lorem ipsum dolor</p>
                  <p className='content__p'>lorem ipsum dolor lorem ipsum dolor</p>
                </div>
              </div>
            </div>

            <div>
              <h2>qwe</h2>
            </div>

            <div>
              <h2>Works like a charm</h2>
            </div>

          </Slider>
      }
    </>
  )
}