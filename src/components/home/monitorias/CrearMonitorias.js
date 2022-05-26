import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../hooks/useForm';
import { listMonitor } from '../../../redux/actions/actionMonitores';
import { registerMonitoria } from '../../../redux/actions/actionMonitorias';

const CrearMonitorias = () =>{

const dispatch = useDispatch();

const [formValue, handleInputChange, rest]= useForm({
        codigo:"",
        materia:"",
        monitor_asignado: "",
        fecha:"",
        salon: "",
      
})
const {codigo,materia,monitor_asignado,fecha,salon}= formValue;
    
const { monitores } = useSelector(store => store.monitores)
  console.log(monitores)

  useEffect(() => {
      dispatch(listMonitor()); //
  }, [dispatch])

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formValue);
     dispatch(registerMonitoria(formValue))
  
    rest()
  };

return (
    <div>
   
    <Form className='p-5' onSubmit={handleSubmit} >
            <h1>Registro de Monitorias</h1>
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
            </Form.Group>
            <Form.Group className="mb-3 col-lg-3" controlId="formBasicName">
                <Form.Label>Materia</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="materia"
                    name="materia"
                    required
                    value={materia}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-3" controlId="formBasicName">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="fecha de monitoria"
                    name="fecha"
                    required
                    value={fecha}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-3" >
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
          <Button className='m-2'variant="success" type="submit">
                Registrarse
            </Button> 
        </Form>
        </div>
);
};
export default CrearMonitorias;