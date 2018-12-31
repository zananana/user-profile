import 'src/setupTests';
import { mockup } from 'src/setupTests';
import * as React from 'react';
import { Follow } from './follow';
import { shallow } from 'enzyme';

describe("Follow", () => {
    const props = {
        user: mockup.user,
        updateUser: jest.fn()
    };
    const follow = shallow(<Follow {...props} />);
    
    it('renders properly', () => {
        expect(follow).toMatchSnapshot();
      });

    describe('when user clicks the follor button', () => {
        const expected = !follow.state().isFollowed;

        beforeEach(() => follow.find('button').simulate('click'));

            it('update the state', () => {
                expect(follow.state().isFollowed).toEqual(expected);
            });

            it('dispatch the updateUser action', () => {
                expect(props.updateUser).toHaveBeenCalled();
            });

    });

});