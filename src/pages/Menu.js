import React from 'react'
import { MenuSlider } from '../components/MenuSlider'
import Slider from 'react-slick'
import { motion } from 'framer-motion'

import bg1 from '../images/mini-bg-1.png'
import bg2 from '../images/mini-bg-2.png'
import bg3 from '../images/mini-bg-3.png'
import bg4 from '../images/mini-bg-4.png'

const slider = [
    {title: 'Кухня', text:'Космополитичная', src:bg1 },
    {title: 'Вино', text:'Лучшая энотека', src:bg2},
    {title: 'Бар', text:'Барная карта', src:bg3},
    {title: 'Десерты', text:'Торты на заказ', src:bg4},
]

function SamplePrevArrow(props) {
    const { style, onClick, className} = props;
    return (
        <svg style={{ ...style, color: '#000', width:'30px', height:'30px' ,position:'absolute', top: '110%', left:'90%' }} 
        className={className} 
             onClick={onClick}
         aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-double-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M349.5 475.5l-211.1-211c-4.7-4.7-4.7-12.3 0-17l211.1-211c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L178.1 256l195.5 195.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.6-12.3 4.6-17-.1zm-111 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17L50.1 256 245.5 60.5c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0l-211.1 211c-4.7 4.7-4.7 12.3 0 17l211.1 211c4.8 4.8 12.4 4.8 17.1.1z" ></path></svg>
    );
  }

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <svg style={{ color: '#000', width:'30px', height:'30px', position:'absolute', top: '110%', right:'2%' }} 
             className={className} 
             onClick={onClick}
        aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M34.5 36.5l211.1 211c4.7 4.7 4.7 12.3 0 17l-211.1 211c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L205.9 256 10.5 60.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.6-4.6 12.2-4.6 16.9.1zm111 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L333.9 256 138.5 451.5c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l211.1-211c4.7-4.7 4.7-12.3 0-17l-211.1-211c-4.8-4.8-12.4-4.8-17.1-.1z"></path></svg>
    );
  }

export const Menu = () => {

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow/>,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
      };

    return (
        <div className="menu">
            <div className="container">
                <div className="menu-box">
                    <Slider {...settings}>
                        {slider.map((stata, index) => {
                            return <MenuSlider data={stata} key={index}/>
                        })}
                        {slider.map((stata, index) => {
                            return <MenuSlider data={stata} key={index}/>
                        })}
                    </Slider>    
                </div>                
            </div>
        </div>
    )
}

