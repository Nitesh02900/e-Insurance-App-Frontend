import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/image1.PNG';
import image2 from '../images/image2.PNG';
import image3 from '../images/image3.PNG';

const items = [
  {
    altText: 'Slide 1',
    key: '1',
    src: image1,
  },
  {
    altText: 'Slide 2',
    key: '2',
    src: image2,
  },
  {
    altText: 'Slide 3',
    key: '3',
    src: image3,
  },
];

const imageDimensions = {
  width: '/* image1 width */', // Replace with the actual width of image1.PNG
  height: '/* image1 height */', // Replace with the actual height of image1.PNG
};

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000, // Adjust the speed as needed
    rtl: true, // Set right-to-left direction
    slidesToShow: 1, // Display only one image at a time
    slidesToScroll: 1, // Move to the next image one at a time
  };

  const carouselContainerStyle = {
    width: imageDimensions.width,
    height: imageDimensions.height,
    margin: 'auto', // Center the carousel on the page
  };

  return (
    <div style={carouselContainerStyle}>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.key}>
            <img
              src={item.src}
              alt={item.altText}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px', // Optional: Add border-radius for rounded corners
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
