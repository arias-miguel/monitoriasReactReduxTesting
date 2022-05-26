import { typesMonitores } from "../types/loginTypes"


const initialState = {
    monitores:[]
}

export const monitoresReducers = (state = initialState, action)=>{
    switch(action.type){
        case typesMonitores.register:
            return{
                monitores:[action.payload]
            }
        case typesMonitores.list:
            return{
                monitores:[...action.payload]
            }
        case typesMonitores.delete:
            return{
                monitores: state.monitores.filter(est=> est.documento !== action.payload)
                }
        case typesMonitores.edit:
            return{
                ...state
            }
        case typesMonitores.search:
            return {
                monitores: action.payload
            }
            default:
                return state;
    }
}