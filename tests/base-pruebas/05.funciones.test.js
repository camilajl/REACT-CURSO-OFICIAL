import { getUser } from "../../src/base-pruebas/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";
import {expect, describe, test} from '@jest/globals';

describe('Pruebas en 05-funciones', () => {


    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect (testUser).toStrictEqual(user)
        
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Fernando'

        const usuarioActivo =  getUsuarioActivo( name )
        console.log('usuarioActivo :>> ', usuarioActivo);

        expect(usuarioActivo).toStrictEqual({
            uid:'ABC567',
            username: name
        })
        
    });
    })