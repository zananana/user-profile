import 'src/setupTests';
import * as React from 'react';
import Modal from './modal';
import { shallow } from 'enzyme';

describe('Modal', () => {
    const props = {
        data: ""
    }
    const modal = shallow(<Modal {...props} />);

    it('renders properly', () => {
        expect(modal).toMatchSnapshot();
    });

    const expected = !modal.state().isShown; // true, default state: false

    describe('when user clicks the show button', () => {

        beforeEach(() => modal.find('.show-btn').simulate('click'));

        it('update the state', () => {
            expect(modal.state().isShown).toEqual(expected);
        });
    });

    describe('when user clicks the close button', () => {

        beforeEach(() => modal.find('.close-btn').simulate('click'));

        it('update the state', () => {
            expect(modal.state().isShown).toEqual(!expected); //expects false
        });
    });
    
});