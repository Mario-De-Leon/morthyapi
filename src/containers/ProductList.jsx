import React from 'react';
import ProductItem from '../Components/ProductItem';
import UseGetProducts from '../hooks/useGetProducts';



const ProductList = () => {
	
	

	var products = UseGetProducts()

	function siguiente (){
		console.log(products.info.next);
	}

	return (
		<section className="main-container">
			<div className="ProductList">	
				{products.results?.map((product)=>(
					<ProductItem product={product} key={product.id}/>
				))}
			</div>
			<button onClick={siguiente}>siguiente</button>
		</section>
	);
}

export default ProductList;
