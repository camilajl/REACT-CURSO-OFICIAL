import {expect, describe, test} from '@jest/globals';
import { getHeroeById } from '../../src/base-pruebas/base-pruebas/08-imp-exp';
import { getHeroesByOwner } from '../../src/base-pruebas/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
    test('getHerobyUd debe retornar unheroes por id', () => {

        const id = 1;
        const hero = getHeroeById( id )
        console.log('hero :>> ', hero);

        expect( hero ).toEqual({id:1, name:'Batman', owner: 'DC'}); 
    });
    
    test('getHerobyId debe retornar undefined si no existe el  id', () => {

        const id = 100;
        const hero = getHeroeById( id )
       

        expect( hero ).toBeFalsy(); 
    });

    test('getHerobyOwner debe retornar un arreglo de 3 ', () => {

        const owner = 'DC';
        const hero = getHeroesByOwner( owner )
      
       

        expect( hero.length ).toBe( 3 ); 
    });

    test('getHerobyOwner debe retornar debe ser igual al arreglo filtrado ', () => {

        const owner = 'DC';
        const hero = getHeroesByOwner( owner )
      
    
        expect( hero ).toEqual( hero.filter( (heroe) => heroe.owner === owner ));
    });

    test('getHerobyOwner debe retornar un arreglo de 2 ', () => {

        const owner = 'Marvel';
        const hero = getHeroesByOwner( owner )
      
       

        expect( hero.length ).toBe( 2 ); 
        expect( hero ).toEqual( hero.filter( (heroe) => heroe.owner === owner ));

        // expect( hero ).toEqual( [
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        //   ] );
    });
});
