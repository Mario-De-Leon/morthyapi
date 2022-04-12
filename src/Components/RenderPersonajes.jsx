import React from 'react';
import { Card } from 'react-bootstrap';
import '../style/RenderPersonaje.css'



const RenderPersonaje = ({personaje}) => {
	
	return (
		<Card  border="dark" style={{ width: '18rem'}}>
			<Card.Img variant="top" src={personaje.image} />
			<Card.Body className="colores">
				<Card.Title>{personaje.name}</Card.Title>
				<Card.Text>
					{personaje.gender}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default RenderPersonaje;


