import React, { useContext, useState } from "react";
import "/workspaces/Diana-Contact-List-with-React/src/styles/card-info.css";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";

const CardInfo = ({ name, phoneNumber, email, address, url, index }) => {
	const { actions } = useContext(Context);
	const [showModal, setShowModal] = useState(false);
	const [updatedName, setUpdatedName] = useState(name);
	const [updatedEmail, setUpdatedEmail] = useState(email);
	const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState(phoneNumber);
	const [updatedAddress, setUpdatedAddress] = useState(address);


	const handleRemoveCard = () => {
		actions.removeCard(index);
	};

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleUpdateCard = () => {
		const updatedCard = {
			name: updatedName,
			email: updatedEmail,
			phoneNumber: updatedPhoneNumber,
			address: updatedAddress,
			url: url,
			index: index,
		};
		actions.updateCard(index, updatedCard);
		handleCloseModal();
	};

	return (
		<div className="d-flex border m-5" style={{ width: "60rem" }}>
			<img src={url} className="card-img-top rounded-circle m-4" alt="foto de perfil" style={{ width: "10rem" }} />
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">{address}</p>
				<p className="card-text">{phoneNumber}</p>
				<p className="card-text">{email}</p>
			</div>
			<div className="m-4 d-flex align-items-start">
				<span className="p-3" onClick={handleRemoveCard}>
					&#10006;
				</span>
				<span className="p-3" onClick={handleShowModal}>&#128393;</span>
			</div>
			{/* Modal para actualizar la tarjeta */}
			<Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Actualizar tarjeta</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="form-group">
						<label htmlFor="name">Nombre:</label>
						<input type="text" className="form-control" id="name" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
					</div>
					<div className="form-group">
						<label htmlFor="email">Correo electrónico:</label>
						<input type="email" className="form-control" id="email" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />
					</div>
					<div className="form-group">
						<label htmlFor="phone">Número de teléfono:</label>
						<input type="tel" className="form-control" id="phone" value={updatedPhoneNumber} onChange={(e) => setUpdatedPhoneNumber(e.target.value)} />
					</div>
					<div className="form-group">
						<label htmlFor="address">Address:</label>
						<input type="text" className="form-control" id="address" value={updatedAddress} onChange={(e) => setUpdatedAddress
							(e.target.value)} />
					</div>
					{/* Agrega más campos de entrada para otros datos que desees actualizar */}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Cerrar
					</Button>
					<Button variant="primary" onClick={handleUpdateCard}>
						Guardar cambios
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default CardInfo;


















