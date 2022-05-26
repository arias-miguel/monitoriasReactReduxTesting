import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useForm from '../../../hooks/useForm';
import { editMonitorAsync } from '../../../redux/actions/actionMonitores';

const ModalEdit = ({datos, setModal}) => {

  const dispatch = useDispatch()
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
 

const [formValue, handleInputChange]= useForm({
  documento: datos.documento,
  nombre: datos.nombre,
  apellido: datos.apellido,
  email: datos.email,
  prograAcademico: datos.prograAcademico,
  telefono: datos.telefono

})

const {documento, nombre, apellido, email, prograAcademico,telefono}=formValue

const handleSubmit =(e)=>{
  e.preventDefault()
  console.log(formValue)
  dispatch(editMonitorAsync(email, formValue))
  handleClose()

    
}
  return (
      <div>
          <>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>Editar Monitor</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Form onSubmit={handleSubmit} margin={50}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Editar los Datos</Form.Label>
                  <Form.Label>Documento</Form.Label>
                  <Form.Control
                      type="number"
                      placeholder="Cedula o pasaporte"
                      name="documento"
                      required
                      value={documento}
                      onChange={handleInputChange}
                  />
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Ingrese Nombre"
                      name="nombre"
                      required
                      value={nombre}
                      onChange={handleInputChange}
                  />
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Ingrese Apellido"
                      name="apellido"
                      required
                      value={apellido}
                      onChange={handleInputChange}
                  />
                  <Form.Label>Programa Academico</Form.Label>
                  <Form.Select aria-label="Default select example" type="value"
                      placeholder="Programa"
                      name="prograAcademico"
                      required
                      value={prograAcademico}
                      onChange={handleInputChange}>
                        <option>Open this select menu</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="HTML">HTML</option>
                    </Form.Select>
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                      type="email"
                      placeholder="correo"
                      name="email"
                      required
                      value={email}
                      onChange={handleInputChange}
                  />
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                      type="number"
                      placeholder="numero de contacto"
                      name="telefono"
                      required
                      value={telefono}
                      onChange={handleInputChange}
                  />
              </Form.Group>

              <Button type="submit">
               Editar
              </Button>
           
          </Form>

                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                          Close
                      </Button>
                   
                  </Modal.Footer>
              </Modal>
          </>




      </div>
  );
};

export default ModalEdit