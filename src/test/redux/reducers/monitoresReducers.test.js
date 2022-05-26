import '@testing-library/jest-dom'
import { monitoresReducers } from '../../../redux/reducers/monitoresReducers';
import { typesMonitores } from '../../../redux/types/loginTypes';


describe('Prubas en monitoresReducer', ()=>{
    test('Debe de realizar el search',()=>{
        const initState ={};
        const action ={
            type: typesMonitores.search,
            payload:{
                id:'8',
                name:'jose'
            }
        }
        const state = monitoresReducers(initState, action);
        expect(state).toEqual({
            monitores: action.payload
            
        })
    })
    test('Debe hacer el editado del search',()=>{
        const initState ={};
        const action ={
            type: typesMonitores.edit,
            payload:{
                id:'10',
                name:'angel'
            }
        }
        const state = monitoresReducers(initState, action);
        expect(state).toEqual({
            ...state
            
        })
    })
    test('State por defaulthh', ()=>{
        const initState ={
            id: 'abc',
            name:'miguel'
        };
        const action ={
            type: typesMonitores.Hola, 
        }
        const state = monitoresReducers(initState, action);
        expect(state).toEqual(initState)
    })
    
})