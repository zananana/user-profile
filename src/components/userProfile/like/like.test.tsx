import 'src/setupTests';
import { mockup } from 'src/setupTests';
import * as React from 'react';
import { Like } from './like';
import { shallow } from 'enzyme';

describe('Like', () => {
    const mockUpdateUser = jest.fn();
    const props = {
        user: mockup.user,
        updateUser: mockUpdateUser
    };
    const like = shallow(<Like {...props} />);
    
    it('renders properly', () => {
        expect(like).toMatchSnapshot();
    });

    describe('when user clicks the like button', () => {
        const expected = !like.state().isLiked;

        beforeEach(() => like.find('button').simulate('click'));

            it('update the state', () => {
                expect(like.state().isLiked).toEqual(expected);
            });

            it('dispatch the updateUser action', () => {
                expect(mockUpdateUser).toHaveBeenCalled();
            });

    });

});