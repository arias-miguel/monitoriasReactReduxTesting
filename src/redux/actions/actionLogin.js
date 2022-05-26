import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { collection, doc, setDoc } from 'firebase/firestore';
import { db, facebook, google} from "../../firebase/firebaseConfig"
import { guardarDatos } from "../../helpers/LocalStorage";
import { loginTypes } from "../types/loginTypes";

export const registerUsr = ({ nombre, email, contrasenia }) => {
    return async( dispatch ) => {
        const auth = getAuth();
        try {
            const newUsr = await createUserWithEmailAndPassword( auth , email, contrasenia )
            const results = await setDoc(doc(collection(db,"coordinador"),newUsr.user.uid),{
                nombre,
                email
            })
            console.log(results)
            alert("usuario registrado exitosamente")
            dispatch( register( newUsr.user.uid, nombre, email ) )
            dispatch(guardarDatos(nombre))
        } catch ( err ) {
            alert("El email ya esta en uso")
        }        
    };
}

const register = ( id, nombre, email) => {
    return {
        type: loginTypes.register,
        payload: { id, nombre, email }
    }
}

// Inicio de sesion con facebook

export const loginFacebookAsync = ( ) => {
    return ( dispatch ) => {
        const auth = getAuth();
        signInWithPopup( auth, facebook)
        .then( (usr ) => console.log(usr))
    }
}
export const loginGoogleAsync = () => {
    return ( dispatch ) => {
        const auth = getAuth();
        signInWithPopup( auth, google)
        .then(({user}) => {console.log(user,'usuario actualizado');})
        .catch(({error}) =>{console.warn(error, 'usuario no autorizado')})
    }
}
export const loginSync =(user, pass)=>{
    return{
            type: loginTypes.login,
            payload: { user, pass}
    }
}
export const loginAsync =(email, password) =>{
    return (dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(loginSync(email, password))
            console.log(user,'usuario actualizado');})
        .catch(({error}) =>{console.warn(error, 'usuario no autorizado')})
    }
}

export const logout = () =>{
    return{
        type: loginTypes.logout
    }
}
export const logoutAsync = ()=>{
    return(dispatch)=>{
        const auth= getAuth()
        signOut(auth)
        .then((user)=>{
            console.log('Adios')
            dispatch(logout())
            
      })
          .catch(error=>{
              console.warn(error)
          })
      }
  }