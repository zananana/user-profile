import userReducer from './userReducer';
import { GET_USER, UPDATE_USER } from '../actions/types/types';

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
        payload: {
            id: 1,
            firstName: 'Harvey',
            lastName: 'Specter',
            likesNum: 121,
            following: 4433,
            followers: 723,
            city: 'New York',
            country: 'USA',
            avatarUrl: '/avatar.png',
            profileUser: 'http://website.com/profile/HarveySpecter'
        }
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
        user: {
            id: 1,
            firstName: 'Harvey',
            lastName: 'Specter',
            likesNum: 121,
            following: 4433,
            followers: 723,
            city: 'New York',
            country: 'USA',
            avatarUrl: '/avatar.png',
            profileUser: 'http://website.com/profile/HarveySpecter'
        }
    };
    const updateUserAction = {
        type: UPDATE_USER,
        payload: {
            id: 1,
            firstName: 'Harvey',
            lastName: 'Specter',
            likesNum: 122,
            following: 4433,
            followers: 723,
            city: 'New York',
            country: 'USA',
            avatarUrl: '/avatar.png',
            profileUser: 'http://website.com/profile/HarveySpecter'
        }
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
