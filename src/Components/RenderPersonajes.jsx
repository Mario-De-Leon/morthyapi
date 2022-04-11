import React from 'react';
import { Card } from 'react-bootstrap';



const RenderPersonaje = ({personaje}) => {
	
	return (
		<Card className="mb-5 " border="dark" style={{ width: '18rem'}}>
			<Card.Img variant="top" src={personaje.image} />
			<Card.Body>
				<Card.Title>{personaje.name}</Card.Title>
				<Card.Text>
					{personaje.gender}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default RenderPersonaje;


