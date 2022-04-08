import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://rickandmortyapi.com/api/character/"

const UseGetProducts = () => {
    const [products, setProducts] = useState([])
	
	useEffect(() => {
	async function fetchMyAPI() {
		let response = await axios(API)
		setProducts(response.data)
		}
		fetchMyAPI()
	}, [])

    return products;
}


export default UseGetProducts;


