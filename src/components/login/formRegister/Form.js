import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { registerUsr } from '../../../redux/actions/actionLogin';
import { ContDivStyles } from '../formLogin/FormStyles';

const FormRegister = () => {

    const dispatch = useDispatch()
    console.log(dispatch)
    const formik = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            contrasenia: "",
            contrasenia2: ""
        },
        onSubmit: ( data ) => {
            dispatch( registerUsr( data ) )
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required(),
            email: Yup.string().email().required(),
            contrasenia: Yup.string().required().oneOf([Yup.ref('contrasenia2')], 'Los password no coinciden'),
            contrasenia2: Yup.string().required().oneOf([Yup.ref('contrasenia')], 'Los password no coinciden')
        })
    });

    return (
        <ContDivStyles>
             
        <Form className='p-5' onSubmit={formik.handleSubmit} >
                <h1>Registro</h1>
                <Form.Group className="mb-3 col-lg-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        required
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        required
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb- col-lg-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="contrasenia"
                        required
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="contrasenia2"
                        require
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Button  className='m-2'variant="primary" type="submit">
                    Registrarse
                </Button>
                <Link to='/'>
                    <Button className='m-2'variant="primary" type="submit">
                        Iniciar Sesion 
                    </Button>
                </Link>
            
            </Form>
        </ContDivStyles>
    );
};

export default FormRegister;