import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import {  typesMonitorias } from "../types/loginTypes"
import { db} from "../../firebase/firebaseConfig"



export const registerMonitoria =(monitoria)=>{
    return (dispath)=>{
        addDoc(collection(db, "monitorias"), monitoria)
        .then(resp =>{
            dispath(registroMonitoriasSincro(monitoria));
            console.log(monitoria)
            alert(`Se registro la monitoria correctamente`);
        })
        .catch(error =>{
            console.log(error);
        })
    }

}
export const registroMonitoriasSincro = (monitoria) =>{
    return{
        type: typesMonitorias.register,
        payload: monitoria
    }
}

// ------listar
export const listMonitorias = ()=>{
    return async(dispath) =>{
        const querySnapshot = await getDocs(collection(db,'monitorias'));
        console.log(querySnapshot)
        const monitorias =[];
        querySnapshot.forEach(doc=>{
            monitorias.push({
                ...doc.data()
            })
        })
        dispath(list(monitorias))
    }

}


export const list = (monitorias) =>{
    return{
        type: typesMonitorias.list,
        payload: monitorias
    }
}
export const deleteMonitorias =(codigo) =>{
    return async(dispath)=>{
        const estr = collection(db,"monitorias");
        const q = query(estr, where("codigo", "==", codigo));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docu) =>{
            deleteDoc(doc(db, "monitorias", docu.id))
            .then(res=>{
                dispath(deleteSinc(codigo))
            })
        })
    }
}



export const deleteSinc = (documento) =>{
    return{
        type: typesMonitorias.delete,
        payload: documento
    }
}

// -------------editar-------------------
export const editMonitoriaAsync = (codigo, documento) => {
    return async (dispatch)=> {
        const collectionListar = collection(db, "monitorias")
        const q = query(collectionListar, where('codigo', '==', codigo))
        const datosQ = await getDocs(q)
        let id

        datosQ.forEach(async(docu)=>{
            id= docu.id
        })
        console.log(id)

        const docRef = doc(db, "monitorias", id)

        await updateDoc(docRef,documento)

        .then(resp =>{ 
            dispatch(editMonitoriaSync(documento))
            console.log(resp)
        })
        .catch(error => console.warn(error))

        dispatch(listMonitorias())


    }
}

export const editMonitoriaSync = (documento) => {
    return{
        type: typesMonitorias.edit,
        payload: documento

    }
}