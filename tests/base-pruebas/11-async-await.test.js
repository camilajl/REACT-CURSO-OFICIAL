import {expect, describe, test} from '@jest/globals';
import getImagen from '../../src/base-pruebas/base-pruebas/11-async-await';

describe('Pruebas en 09-promesas', () => {
    test('getImagen debe retornar url de la imagen', async () => {

        const url = await getImagen()
        console.log('url :>> ', url);
       
        expect (typeof url).toBe('string')
    });


    
});