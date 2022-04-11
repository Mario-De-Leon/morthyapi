import React , { useEffect} from "react";
import axios from "axios";
import { Context } from "../Context";

const UseGetProducts = (API) => {
	const {
		personajes,
		setPersonajes,
    } = React.useContext(Context)
	
	useEffect(() => {
	async function fetchMyAPI() {
		let response = await axios(API)
		setPersonajes(response.data)
		}
		fetchMyAPI()
	}, [])
    return personajes;
}
export default UseGetProducts;


