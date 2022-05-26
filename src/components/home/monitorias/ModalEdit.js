import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../hooks/useForm';
import { listMonitor } from '../../../redux/actions/actionMonitores';
import { editMonitoriaAsync } from '../../../redux/actions/actionMonitorias';

const ModalEdit = ({datos, setModal}) => {

  const dispatch = useDispatch()
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
 
const [formValue, handleInputChange]= useForm({
  codigo: datos.codigo,
  materia: datos.materia,
  monitor_asignado: datos.monitor_asignado,
  salon: datos.salon,
  fecha: datos.fecha
})

const {codigo, materia, monitor_asignado,salon,fecha}=formValue

const { monitores } = useSelector(store => store.monitores)
  console.log(monitores)

  useEffect(() => {
      dispatch(listMonitor()); //
  }, [dispatch])

const handleSubmit =(e)=>{
  e.preventDefault();
  console.log(formValue)
  dispatch(editMonitoriaAsync(codigo, formValue))
  handleClose()
}
  return (
      <div>
          <>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>Editar Monitoria</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Form onSubmit={handleSubmit} margin={50}>
                  <Form.Group className="mb-3 col-lg-3" controlId="formBasicName">
                <Form.Label>Codigo de Monitoria</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="numero de 6 cifras"
                    name="codigo"
                    required
                    value={codigo}
                    onChange={handleInputChange}
                />
                <Form.Group className="mb-3 col-lg-3" controlId="formBasicName">
                <Form.Label>Monitor</Form.Label>
                <Form.Select aria-label="Default select example" type="text"
                    placeholder="monitor"
                    name="monitor_asignado"
                    required
                    value={monitor_asignado}
                    onChange={handleInputChange}>
                        <option>Seleccione el Monitor</option>
                        {
                            monitores.map((element, index) =>(
                                <option key={index} value={element.nombre}>{element.nombre} {element.apellido}</option>
                            ))
                        }
                        
                    </Form.Select>
                
            </Form.Group>
                <Form.Label>Materia</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="materia"
                    name="materia"
                    required
                    value={materia}
                    onChange={handleInputChange}
                />
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="fecha de monitoria"
                    name="fecha"
                    required
                    value={fecha}
                    onChange={handleInputChange}
                />
                <Form.Label>Salon</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Salon"
                    name="salon"
                    required
                    value={salon}
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