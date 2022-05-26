import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMonitorias, listMonitorias } from '../../../redux/actions/actionMonitorias'
import ModalEdit from './ModalEdit'

const Monitorias = () => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState(false);

  const [datos, setDatos] = useState([]);

  const { monitorias } = useSelector(store => store.monitorias)
  console.log(monitorias)

  useEffect(() => {
      dispatch(listMonitorias()); //
  }, [dispatch])

  const editar = (monitoria) => {
    setModal(true)
    setDatos(monitoria)
  }
 
  return (
    <>
    <h1>Lista de Monitores</h1>
    
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Codigo</th>
      <th>Materia</th>
      <th>Monitor Asignado</th>
      <th>Salon</th>
      <th>Fecha</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
      monitorias.map((element, index) =>(
        <tr key={index}>
        <td>{element.codigo}</td>
        <td>{element.materia}</td>
        <td>{element.monitor_asignado}</td>
        <td>{element.salon}</td>
        <th>{element.fecha}</th>
        <td><Button 
        onClick={() => editar(element)}
        variant="success">Editar</Button>
        <Button 
        onClick={()=> dispatch(deleteMonitorias(element.codigo))}
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


export default Monitorias