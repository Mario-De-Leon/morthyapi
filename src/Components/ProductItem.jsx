import React from 'react';
import { Card } from 'react-bootstrap';

const ProductItem = ({product}) => {
	
	return (
		<Card className="mb-5" style={{ width: '18rem'}}>
			<Card.Img variant="top" src={product.image} />
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Text>
					{product.gender}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default ProductItem;


