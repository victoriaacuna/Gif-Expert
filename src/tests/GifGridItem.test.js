import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import {GifGridItem} from './../components/GifGridItem';
import React from 'react';

describe('Pruebas componente Gif Grid Item', () => {

    const title = 'un titulo';
    const url = 'https://localhost:3000/algo.jpg';

    const wrapper = shallow(<GifGridItem url={url} title={title}/>);

    test('Should match snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('img should have url and alt', () => {
        const img = wrapper.find('img');
        console.log(img.props());
        console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('should have className animate__bounce"', () => {
        const div = wrapper.find('div');
        const className = 'animate__bounce';
        console.log(div.hasClass(className));
        expect(div.hasClass(className)).toBe(true);

        // const className = div.prop('className');
        // expect(className.includes('animate__bounce')).toBe(true);
    })
    
    



});