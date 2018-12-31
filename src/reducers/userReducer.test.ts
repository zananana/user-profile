import { mockup } from 'src/setupTests';
import userReducer from './userReducer';
import { GET_USER, UPDATE_USER } from '../actions/types/types';

const userMock = mockup.user;
const updatedUserMock = mockup.userUpdate;

test('userReducer', () => {
    let state;

    // Test 1: app init
    // Assign
    const currentInitalState = undefined;
    const initialAction = {};
    const expectedStateInitial = { user: {} };

    // Act
    state = userReducer(currentInitalState, initialAction);

    // Assert
    expect(state).toEqual(expectedStateInitial);


    // Test 2: load user
    // Assign
    const currentState = {
        user: {}
    };
    const getUserAction = {
        type: GET_USER,
        payload: userMock
    };
    const expectedStateUser = {
        user: getUserAction.payload
    };

    // Act
    state = userReducer(currentState, getUserAction);

    // Assert
    expect(state).toEqual(expectedStateUser);

    // Test 3: update user

    // Assign
    const userStateBeforeUpdate = {
        user: userMock
    };
    const updateUserAction = {
        type: UPDATE_USER,
        payload: updatedUserMock
    };

    const oldState = Object.assign({}, userStateBeforeUpdate);
    const expectedStateUserUpdated = {
        user: Object.assign(oldState, updateUserAction.payload)
    };

    // Act
    state = userReducer(userStateBeforeUpdate, updateUserAction);

    // Assert
    expect(state).toEqual(expectedStateUserUpdated);

});
