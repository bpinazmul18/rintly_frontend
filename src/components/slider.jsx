import React from "react";
import ReactSlider from 'react-slick'
import SliderItem from './common/slider-item';
import img1 from '../assets/img/img-1.png'
import img2 from '../assets/img/img-2.png'
import img3 from '../assets/img/img-3.png'

const Slider = () => {
    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const sliderItems = [
        {id: 1, name: 'Action', media: img1},
        {id: 1, name: 'Comedy', media: img2},
        {id: 1, name: 'Thriller', media: img3},
    ]

      
    return ( 
        <ReactSlider {...settings}>
            {sliderItems.map((item) => <SliderItem key={item.id} name={item.name} media={item.media}/>)}
        </ReactSlider>
     );
}
 
export default Slider;