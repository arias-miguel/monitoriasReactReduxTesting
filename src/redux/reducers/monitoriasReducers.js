import { typesMonitorias } from "../types/loginTypes"


const initialState = {
    monitorias:[]
}

export const monitoriasReducers = (state = initialState, action)=>{
    switch(action.type){
        case typesMonitorias.register:
            return{
                monitorias:[action.payload]
            }
        case typesMonitorias.list:
            return{
                monitorias:[...action.payload]
            }
        case typesMonitorias.delete:
            return{
                monitorias: state.monitores.filter(est=> est.codigo !== action.payload)
            }
        case typesMonitorias.edit:
            return{
                    ...state
                }
            default:
                return state;
    }
}