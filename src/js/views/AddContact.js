import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import { Modal, Button } from 'react-bootstrap';


const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal


  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    const newCard = {
      url: "https://media.istockphoto.com/id/1135031219/vector/man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background.jpg?s=170667a&w=0&k=20&c=RKCJekF8WsoqyTiiRe5dHqAzsSXX4daVujgpHrkMDKs=",
      name: fullName,
      email: email,
      phoneNumber: phone,
      address: address
    };
    actions.addCard(newCard);
    setShowModal(true); // Mostrar el modal después de agregar el contacto exitosamente
  };
  

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <div className='container my-5'>
        <form className="row g-3">
          <h2>Add Contact</h2>
          <div className="col-md-12">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder='Full Name' value={fullName} onChange={handleFullNameChange} />
          </div>
          <div className="col-md-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder='Email' value={email} onChange={handleEmailChange} />
          </div>
          <div className="col-12">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="phone" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" placeholder="Address" value={address} onChange={handleAddressChange} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={handleAddCard}>Save</button>
          </div>
        </form>
      </div>
      {/* Modal para mostrar el mensaje "Agregado exitosamente" */}
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Agregado exitosamente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡El nuevo contacto ha sido agregado con éxito!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
          <Link to="/">
            <Button variant="primary">Regresar a lista de contactos</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddContact;
