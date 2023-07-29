import {expect, describe, test} from '@jest/globals';


describe('Pruebas en <DemoComponent/>', () => {

test('Esta prueba no debe de fallar', () => {
    //1. inicializacion
    //2. estimulo
    //3. aserciones observacion del comportamiento...es el esperado?
    const message1 = "hola mundo"
    const message2 = message1.trim()
    expect( message1 ).toBe( message2 )
});
})