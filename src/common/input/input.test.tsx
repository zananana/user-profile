import 'src/setupTests';
import * as React from 'react';
import Input from './input';
import { shallow } from 'enzyme';

describe('Input', () => {
    const props = {
        value: "value",
        onChange: jest.fn(),
        onKeyUp: jest.fn(),
        className: "class-name",
        type: "text",
        placeholder: "placeholder",
        autoComplete: "off"
    }
    const input = shallow(<Input {...props} />);

    it('renders properly', () => {
        expect(input).toMatchSnapshot();
    });
    
});