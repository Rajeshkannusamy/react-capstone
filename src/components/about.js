import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
  return (
	<div className="w-90 m-auto pt-3">
		<Card>
	        <Card.Body>
		        <Card.Text>
		            About Bike Palace - The Place where we can able to find three top most brands of bikes both New bikes as well as old bike at differnt price 
		        </Card.Text>
	        </Card.Body>
	    </Card>

	    <Card className="mt-3">
	        <Card.Body>
	        	<Card.Title>
	            	Honda
	        	</Card.Title>
	        	<Card.Text>
				    Honda Motor Company, Ltd. is a Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles, motorcycles, and power equipment.
		        </Card.Text>
	        </Card.Body>
	    </Card>

	    <Card className="mt-3">
	        <Card.Body>
	        	<Card.Title>
	            	Yamaha
	        	</Card.Title>
	        	<Card.Text>
				    Yamaha Motor Company Limited is a Japanese manufacturer of motorcycles, marine products such as boats and outboard motors, and other motorized products. The company was established in 1955 upon separation from Yamaha Corporation, and is headquartered in Iwata, Shizuoka, Japan. 
		        </Card.Text>
	        </Card.Body>
	    </Card>

	    <Card className="mt-3 mb-5">
	        <Card.Body>
	        	<Card.Title>
	            	TVS
	        	</Card.Title>
	        	<Card.Text>
				    TVS Motor Company Limited is an Indian multinational motorcycle company headquartered at Chennai, India. It is the third largest motorcycle company in India with a revenue of over ₹20,000 crore in 2018–19. The company has an annual sales of 3 million units and an annual capacity of over 4 million vehicles.
		        </Card.Text>
	        </Card.Body>
	    </Card>
	</div>
  );
}

export default About;
