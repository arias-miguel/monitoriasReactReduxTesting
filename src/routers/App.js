import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Login from '../container/login/Login';
import Register from '../container/register/Register';
import DashboardRouters from './DashboardRouters';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';



const App = () => {

    // const [isAuth, setIsAuth] = useState(false)
    const [checking, setChecking]=useState(true)
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    useEffect(() => {
       const auth = getAuth()
       onAuthStateChanged(auth, (user)=>{
           if(user?.uid){
                         setIsLoggedIn(true)
           }
           else{
               setIsLoggedIn(false)
           }
           setChecking(false)
       })
    }, [setIsLoggedIn, setChecking])

if(checking){
    return(
        <h1>Espere....</h1>
    )
}

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={
              <PublicRoutes isAuth={isLoggedIn} >
                <Login />
              </PublicRoutes>} />
            <Route path='/registro' element={
              <PublicRoutes isAuth={isLoggedIn} >
                <Register />
              </PublicRoutes>} />

            {/* <Route path='*' element={<Navigate to="/login" />} /> */}
            <Route path='/*' element={
            <PrivateRoutes isAuth={isLoggedIn}><DashboardRouters /></PrivateRoutes>}/>

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;