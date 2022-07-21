import React from "react";
import ReactSlider from 'react-slick'
import SliderItem from './common/slider-item';

const Slider = () => {
    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      
    return ( 
        <ReactSlider {...settings}>
            {[1,2,4].map(item => <SliderItem key={item}/>)}
        </ReactSlider>
     );
}
 
export default Slider;