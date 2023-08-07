import React from "react";
import "/workspaces/Diana-Contact-List-with-React/src/styles/navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar">

			<Link to="/">
				<button className="btn btn-dark mx-5">Go back</button>
			</Link>
			
			<Link to="/AddContact">
				<button className="btn btn-dark mx-5">Añadir contacto</button>
			</Link>
			
		</nav>
	);
};
