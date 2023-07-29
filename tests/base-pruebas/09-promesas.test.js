import {expect, describe, test} from '@jest/globals';
import getHeroeByIdAsync from '../../src/base-pruebas/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe', ( done ) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
            });
            done()

            })
        
    });

    test('getHeroeByIdAsync debe retornar error si heroe no existe', ( done ) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe(`no se puedo encintrar el heroes con el id ${id}`)
            done()

            })
        
    });
    

    
});
