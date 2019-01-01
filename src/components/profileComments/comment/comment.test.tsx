import 'src/setupTests';
import * as React from 'react';
import Comment from './comment';
import { shallow } from 'enzyme';

describe('Comment', () => {
    const props = {
        key: 1,
        data: {}
    }
    const comment = shallow(<Comment {...props} />);

    it('renders properly', () => {
        expect(comment).toMatchSnapshot();
    });
    
});