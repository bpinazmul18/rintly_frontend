import ReactSlider from 'react-slick'
import SliderItem from './common/slider-item';

const Slider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      
    return ( 
        <ReactSlider {...settings}>
            {[1,2,4].map(item => <SliderItem/>)}
        </ReactSlider>
     );
}
 
export default Slider;