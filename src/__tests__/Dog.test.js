import React from 'react';
import ReactDOM from 'react-dom';
import Dog from "../Dog";
import {render} from 'react-testing-library'
import 'jest-dom/extend-expect'

describe('testing Dog', () =>{

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dog breed={'boxer'}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders props', () => {
        const {getByTestId} = render(<Dog breed={'bulldog'} subBreed={'french'} />);
        expect(getByTestId('breed')).toHaveTextContent('bulldog');
        expect(getByTestId('subBreed')).toHaveTextContent('french');
    });
});
