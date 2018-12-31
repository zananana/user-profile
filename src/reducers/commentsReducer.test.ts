import { mockup } from 'src/setupTests';
import commentsReducer from './commentsReducer';
import { GET_COMMENTS, ADD_COMMENT } from '../actions/types/types';

const commentsMock = mockup.comments;
const addCommentMock = mockup.addComment;

test('commentsReducer', () => {
    let state;

    // Test 1: app init
    // Assign
    const currentInitalState = undefined;
    const initialAction = {};
    const expectedStateInitial = { comments: [] };

    // Act
    state = commentsReducer(currentInitalState, initialAction);

    // Assert
    expect(state).toEqual(expectedStateInitial);

    // Test 2: get comments
    // Assign
    const currentStateBeforeGetComments = undefined;
    const getCommentsAction = {
        type: GET_COMMENTS,
        payload: commentsMock
    };
    const getCommentsExpectedState = { comments: getCommentsAction.payload };

    // Act
    state = commentsReducer(currentStateBeforeGetComments, getCommentsAction);

    // Assert
    expect(state).toEqual(getCommentsExpectedState);

    // Test 3: add comments
    // Assign
    const currentStateBeforeAddComment = {
        comments: getCommentsAction.payload
    }

    const addCommentAction = {
        type: ADD_COMMENT,
        payload: addCommentMock
    }

    const addCommentsExpectedState = {
        comments: [...currentStateBeforeAddComment.comments, addCommentAction.payload]
    };

    // Act
    state = commentsReducer(currentStateBeforeAddComment, addCommentAction);

    // Assert
    expect(state).toEqual(addCommentsExpectedState);

});