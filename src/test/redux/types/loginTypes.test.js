import '@testing-library/jest-dom'
import { loginTypes, typesMonitores, typesMonitorias } from '../../../redux/types/loginTypes.js'

describe('Verificar types', ()=>{
    test('should',()=>{
    });
    test('comparar loginTypes',()=>{
        expect(loginTypes).toEqual({
            login: "[USR] Login",
            logout: "[USR] Logout",
            register: "[USR] register"
        })
    })
    test('comparar  typesMonitores',()=>{
        expect(typesMonitores).toEqual({
            register:'register',
            list: 'list',
            delete:'delete',
            edit: 'edit',
            search : 'search',
        })
    })
    test('comparar Mo',()=>{
        expect(typesMonitorias).toEqual({
            register:'register',
            list: 'list',
            delete:'delete',
            edit: 'edit'
        })
    })
})