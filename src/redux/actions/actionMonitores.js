import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { typesMonitores } from "../types/loginTypes"
import { db} from "../../firebase/firebaseConfig"
// import { async } from "@firebase/util"



export const registerMonitor =(monitor)=>{
    return (dispath)=>{
        addDoc(collection(db, "monitores"), monitor)
        .then(resp =>{
            dispath(registroMonitoresSincro(monitor));
            console.log(monitor)
            alert(`Se registro el monitor correctamente ${monitor.nombre} ${monitor.apellido}`);
        })
        .catch(error =>{
            console.log(error);
        })
    }

}
export const registroMonitoresSincro = (monitor) =>{
    return{
        type: typesMonitores.register,
        payload: monitor
    }
}


export const listMonitor = ()=>{
    return async(dispath) =>{
        const querySnapshot = await getDocs(collection(db,'monitores'));
        console.log(querySnapshot)
        const monitores =[];
        querySnapshot.forEach(doc=>{
            monitores.push({
                ...doc.data()
            })
        })
        dispath(list(monitores))
        console.log(monitores)
    }

}
export const list = (monitores) =>{
    return{
        type: typesMonitores.list,
        payload: monitores
    }
}

// ----Eliminar
export const deleteMonitor =(documento) =>{
    return async(dispath)=>{
        const estr = collection(db,"monitores");
        const q = query(estr, where("documento", "==", documento));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docu) =>{
            deleteDoc(doc(db, "monitores", docu.id))
            .then(res=>{
                dispath(deleteSinc(documento))
            })
        })
    }
}



export const deleteSinc = (documento) =>{
    return{
        type: typesMonitores.delete,
        payload: documento
    }
}

// -------------editar-------------------

export const editMonitorAsync = (email, documento) => {
    return async (dispatch)=> {
        const collectionListar = collection(db, "monitores")
        const q = query(collectionListar, where('email', '==', email))
        const datosQ = await getDocs(q)
        let id

        datosQ.forEach(async(docu)=>{
            id= docu.id
        })
        console.log(id)

        const docRef = doc(db, "monitores", id)

        await updateDoc(docRef,documento)

        .then(resp =>{ 
            dispatch(editMonitorSync(documento))
            console.log(resp)
        })
        .catch(error => console.warn(error))

        dispatch(listMonitor())


    }
}

export const editMonitorSync = (documento) => {
    return{
        type: typesMonitores.edit,
        payload: documento

    }
}