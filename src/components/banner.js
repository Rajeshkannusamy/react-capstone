import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
	return (
		<Carousel>
		  <Carousel.Item>
		    <img
		      className="d-block w-100 carousel-img-h"
		      src="/images/cor1.jpg"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100 carousel-img-h"
		      src="/images/cor2.jpg"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100 carousel-img-h"
		      src="/images/cor6.jpg"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>

	);
}

export default Banner;