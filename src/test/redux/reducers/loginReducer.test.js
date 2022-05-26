import '@testing-library/jest-dom'
import { loginReducer } from '../../../redux/reducers/loginReducer';
import { loginTypes } from '../../../redux/types/loginTypes';


describe('Prubas en LoginReducer', ()=>{
    test('Debe de realizar el login',()=>{
        const initState ={};
        const action ={
            type: loginTypes.resgiter,
            payload:{
                id:'1',
                name:'miguel'
            }
        }
        const state = loginReducer(initState, action);
        expect(state).toEqual({
               
        })
    })
    test('State por default', ()=>{
        const initState ={
            id: 'abc',
            name:'miguel'
        };
        const action ={
            type:loginTypes.Hola, 
        }
        const state = loginReducer(initState, action);
        expect(state).toEqual(initState)
    })
    
})