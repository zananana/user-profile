import commentsReducer from './commentsReducer';
import { GET_COMMENTS, ADD_COMMENT } from '../actions/types/types';

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
        payload: [
            {
                "id": 1,
                "firstName": "Louis",
                "lastName": "Litt",
                "comment": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
                "authorId": 1,
                "datePosed": 1545264000000,
                "authorAvatarUrl": "/avatar.png"
            },
            {
                "id": 2,
                "firstName": "Rachel",
                "lastName": "Zein",
                "comment": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
                "authorId": 2,
                "datePosed": 1545004800000,
                "authorAvatarUrl": "/avatar.png"
            },
            {
                "id": 3,
                "firstName": "Mike",
                "lastName": "Ross",
                "comment": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
                "authorId": 3,
                "datePosed": 1541980800000,
                "authorAvatarUrl": "/avatar.png"
            }
        ]
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
        payload: {
            "id": 4,
            "firstName": "Mila",
            "lastName": "Lee",
            "comment": "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.",
            "authorId": 4,
            "datePosed": 1546084977000,
            "authorAvatarUrl": "/avatar.png"
        }
    }

    const addCommentsExpectedState = {
        comments: [...currentStateBeforeAddComment.comments, addCommentAction.payload]
    };

    // Act
    state = commentsReducer(currentStateBeforeAddComment, addCommentAction);

    // Assert
    expect(state).toEqual(addCommentsExpectedState);

});