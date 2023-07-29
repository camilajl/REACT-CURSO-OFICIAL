import { describe, test} from '@jest/globals';
import {render} from '@testing-library/react'
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {
    test('debe hacer match con el snapshot', () => {
        
        const title = "Hola, soy goku"
        render( <FirstApp title={title} /> )
        
    });
});
