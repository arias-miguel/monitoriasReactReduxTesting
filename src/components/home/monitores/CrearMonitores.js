import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useForm from '../../../hooks/useForm';
import { registerMonitor } from '../../../redux/actions/actionMonitores';

const CrearMonitores = () => {

  const dispatch = useDispatch()

  const [formValue, handleInputChange, rest]= useForm({
          documento:"",
          nombre: "",
          apellido:"",
          email: "",
          prograAcademico: "",
          telefono: "",
  })
  const {documento,nombre,apellido,prograAcademico,telefono,email}= formValue
      
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formValue)
     dispatch(registerMonitor(formValue))

    rest()

}

  return (
      <div>
     
      <Form className='p-5' onSubmit={handleSubmit} >
              <h1>Registro de Monitores</h1>
              <Form.Group className="mb-3 col-lg-3" controlId="formBasicName">
                  <Form.Label>Documento</Form.Label>
                  <Form.Control
                      type="number"
                      placeholder="Cedula o pasaporte"
                      name="documento"
                      required
                      value={documento}
                      onChange={handleInputChange}
                  />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-3" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Ingrese Nombre"
                      name="nombre"
                      required
                      value={nombre}
                      onChange={handleInputChange}
                  />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-3" controlId="formBasicName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Ingrese Apellido"
                      name="apellido"
                      required
                      value={apellido}
                      onChange={handleInputChange}
                  />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
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
              </Form.Group>

              <Form.Group className="mb- col-lg-3" controlId="formBasicPassword">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                      type="email"
                      placeholder="correo"
                      name="email"
                      required
                      value={email}
                      onChange={handleInputChange}
                  />
              </Form.Group>
              <Form.Group className="mb- col-lg-3" controlId="formBasicPassword">
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
            

          
              <Button  className='m-2'variant="success" type="submit">
                  Registrarse
              </Button>  
          </Form>
          </div>
  );
};

export default CrearMonitores