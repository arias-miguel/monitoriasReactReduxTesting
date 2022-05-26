import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchMonitoresAsync } from '../../../redux/actions/actionMonitores'
import Monitores from '../monitores/Monitores'

const Buscar = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            search:''},
        validationSchema: Yup.object({
            search: Yup.string().required('campo requerido')
        }),
        onSubmit: ({search})=>{
            console.log(search)
            dispatch(searchMonitoresAsync(search))
        }
    })


    
  return (
    <div style={{margin:'5px 10px 3px 0px',width:'70%', color:'black'}}>
                    <form onSubmit={formik.handleSubmit}>
                    <InputGroup >
                        <FormControl style={{height:'38px', width:'200px'}}
                        name="search"
                        placeholder="Search"
                        onChange={formik.handleChange}/>
                        <button style={{border:'none', padding:'0px'}} type="submit">
                            <InputGroup.Text style={{height:'38px'}} id="basic-addon1" className="bg-warning text-dark" ><img src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1652853701/bookmarkmovies/Property_1_search_o8m1ok.png' alt='logosearh'/></InputGroup.Text></button>
                    </InputGroup>
                    </form>
                    {/* <Monitores/> */}
                </div>
  )
}

export default Buscar