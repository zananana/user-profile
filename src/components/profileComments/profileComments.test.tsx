import 'src/setupTests';
import { mockup } from 'src/setupTests';
import * as React from 'react';
import { ProfileComments } from './profileComments';
import { shallow } from 'enzyme';

describe("ProfileComments", () => {
    const mockAddComment = jest.fn();
    const props = {
        comments: mockup.comments,
        getComments: jest.fn(),
        addComments: mockAddComment,
        handleWrapperHeight: ""
    };
    const profileComments = shallow(<ProfileComments {...props}/>);

    it('renders without crashing', () => {
        expect(profileComments).toMatchSnapshot();
    });

    it('includes a Comment', () => {
        expect(profileComments.find('Comment').exists()).toBe(true);
    });

    describe('Add comment', () => {
        const commentVal = 'new comment';

        beforeEach(() => profileComments.find('Input').simulate('change', { currentTarget: { value: commentVal } } ));

        it('updates the state', () => {
            expect(profileComments.state().comment.value).toEqual(commentVal);
        });

        describe('Add comment', () => {

            beforeEach(() => profileComments.find('Input').simulate('keyUp', {
                key: 'Enter',
                keyCode: 13,
                which: 13,
                currentTarget: { value: commentVal }
            }));

            it('dispatches the addComment action on enter', () => {
                expect(mockAddComment).toHaveBeenCalled();
            });

        });

    })

});