import React, { useEffect } from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { obtenerDatos } from '../../helpers/LocalStorage';
import { logoutAsync } from '../../redux/actions/actionLogin';
import { listMonitor } from '../../redux/actions/actionMonitores';
import { ContDivStyles } from '../login/formLogin/FormStyles';
import CrearMonitores from './monitores/CrearMonitores';
import Monitores from './monitores/Monitores';
import CrearMonitorias from './monitorias/CrearMonitorias';
import Monitorias from './monitorias/Monitorias';



const NavHome = () => {

    const dispatch = useDispatch() 
   
    const user = obtenerDatos()
  useEffect(() => {
      dispatch(listMonitor());
      
  }, [dispatch])   

    return (
        <>
        <ContDivStyles>
        <Navbar collapseOnSelect className=''expand="lg" bg="light" variant="light">
            <Container fluid>
                <Navbar.Brand><img style={{maxHeight:'80px'}}src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1653369992/universitysystem/Logo-Uninorte_vo4ydm.png' alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <h2>Hola Miguel{user}</h2>
                </Nav>
            
                <Nav>
                    
                <Link className='pt-2 me-3' to="/monitores">Monitores</Link>
                <Link className='pt-2 me-3' to="/crearmonitores">Crear Monitor</Link>
                <Link className='pt-2 me-3' to="/monitorias">Monitorias</Link>
                <Link className='pt-2 me-3' to="/crearmonitorias">Crear Monitoria</Link>
                <div style={{margin:'5px 10px 3px 0px',width:'200px', color:'black'}}>
                    <InputGroup>
                        <FormControl style={{height:'38px'}}
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text  style={{height:'38px'}} id="basic-addon1" className="bg-warning text-dark" ><img src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1652853701/bookmarkmovies/Property_1_search_o8m1ok.png' alt='logosearh'/></InputGroup.Text>
                    </InputGroup>
                </div>
                    </Nav>
                    <Button className="text-warning" type='button' variant="primary"
                    onClick={()=>dispatch(logoutAsync())}>
                            Cerrar Sesion 
                        </Button>
                    </Navbar.Collapse>
                     
                    </Container>
                    
        
            </Navbar> 
            <Routes>
          <Route path="/monitores" element={ <Monitores/>}/>
          <Route path="/crearmonitores" element={ <CrearMonitores/>}/>
          <Route path="/monitorias" element={ <Monitorias/>}/>
          <Route path="/crearmonitorias" element={ <CrearMonitorias/>}/>
          
             </Routes>
        </ContDivStyles>
        
        </>
    ) 
                
                    
};
export default NavHome;