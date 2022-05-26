import React, { useEffect, useState }  from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMonitor, listMonitor } from '../../../redux/actions/actionMonitores'
import ModalEdit from './ModalEdit'
// import { useSelector }from 'react-redux'
// import { listMonitor } from '../../../redux/actions/actionMonitores'

const Monitores = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const [datos, setDatos] = useState([]);

  const { monitores } = useSelector(store => store.monitores)
  console.log(monitores)

  useEffect(() => {
      dispatch(listMonitor()); //
  }, [dispatch])

  const editar = (planta) => {
    setModal(true)
    setDatos(planta)
  }


 
  return (
    <>
    <h1>Lista de Monitores</h1>
    
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Doc</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>email</th>
      <th>Programa Academico</th>
      <th>Telefono</th>
      <th>edi</th>
  
    </tr>
  </thead>
  <tbody>
    {
      monitores.map((element, index) =>(
        <tr key={index}>
        <td>{element.documento}</td>
        <td>{element.nombre}</td>
        <td>{element.apellido}</td>
        <td>{element.email}</td>
        <th>{element.prograAcademico}</th>
        <td>{element.telefono}</td>
        <td><Button
        onClick={() => editar(element)}        
        variant="success">Editar</Button>
        <Button 
        onClick={()=> dispatch(deleteMonitor(element.documento))}
        variant="danger">Borrar</Button> </td>
      </tr>
      ))
    }
  </tbody>
</Table>
{
  modal === true ? <ModalEdit datos={datos} setModal={setModal} /> : ''
}
    </>
  )
}

export default Monitores