import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import AddCategory from './../components/AddCategory';


describe('Pruebas en Add Category', () => {

    // El jest ayuda a que ahora se puede saber si fue llamada, cuántas veces fue llamada, etc. (La función es una función vacía, no hace nada)
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        // Para que todo se limpie.
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('the input should change', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        // Lo que estás simulando es que estás mandando un objeto parecido al evento que recibiría la función.
        // Ese evento (que es un objeto) tiene una propiedad target que a su vez es otro objeto que tiene una propiedad value
        // Ese value tomará el valor que definiste en la constante, que es como si lo estuvieses mandando en el input.
        input.simulate('change', {target: {value: value}});
        expect(wrapper.find('p').text()).toBe(value);
        console.log(value);

    });
    
    test('it should NOT post the info', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        // Como no se tiene ningún valor en inputvalue la función de setcategories no se debería de llamar.
        expect(setCategories).not.toHaveBeenCalled();

    });

    test('should call setCategories and clear input', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: {value: value}});
        console.log(wrapper.find('p').text());
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(input.prop('value')).toBe('');
        console.log(wrapper.find('p').text());
        expect(wrapper.find('p').text()).toBe('');

    })
    

})
