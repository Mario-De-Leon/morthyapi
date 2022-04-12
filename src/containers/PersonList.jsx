import React from 'react';
import { Button,Navbar,NavDropdown,Nav , Container} from 'react-bootstrap';
import UseGetCharacter from '../hooks/useGetPersons';
import { Context } from "../Context";
import axios from "axios";
import RenderPersonaje from '../Components/RenderPersonajes';
import '../style/PersonList.css'
import { useEffect } from 'react';


let API = "https://rickandmortyapi.com/api/character/"

const CharacterList = () => {
	UseGetCharacter(API)
	const {
		personajes,
		setPersonajes,
	} =  React.useContext(Context)

	const [activeAnterior, setActiveAnterior] = React.useState(false)
	const [activeSiguiente, setActiveSiguiente] = React.useState(false)
	const [pages, setPages] = React.useState(1)

	useEffect(()=> {
		if(personajes.info?.pages === pages ){
			setActiveSiguiente(true)
		}if(pages === 1){
			setActiveAnterior(true)
		}
	},[pages])

	
	async function siguiente()  {
			if(personajes.info.next != null){
				setActiveAnterior(true)
				setActiveSiguiente(true)
				let listo =  await axios(personajes.info.next)
				setTimeout(() => {
					setPersonajes(listo.data)
					setActiveAnterior(false)
					setActiveSiguiente(false)
					setPages(pages + 1)
				},1000 );
			}
		}
	
	
	async function anterior()  {
		if(personajes.info.prev != null){
			setActiveSiguiente(true)
			setActiveAnterior(true)	
			let listo =  await axios(personajes.info.prev)
			setTimeout(() => {
				
				setPersonajes(listo.data)
				setActiveSiguiente(false)
				setActiveAnterior(false)
				setPages(pages - 1)
			}, 1000);
			
		}
	}
	return (
		<section className="main-container">
			<div>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home">
						<Button onClick={anterior} disabled={activeAnterior} variant="secondary">anterior</Button>
						</Navbar.Brand>
						<Navbar.Brand href="#home">
						<Button onClick={siguiente} disabled={activeSiguiente} variant="primary">siguiente</Button>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#features">
								<h1>Bienvenidos</h1>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			
			
			</div>
			<div className="caja-contenedora">	
				{personajes.results?.map((person)=>(
					<RenderPersonaje personaje={person} key={person.id}/>
				))}
			</div>
			
		</section>
	);
}

export default CharacterList;
