import 'src/setupTests';
import * as actions from './userActions';
import * as types from './types/types';
import { mockup } from 'src/setupTests';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const userMock = mockup.user;
const updatedUserMock = mockup.userUpdate;

describe('userActions tests', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('GET_USER', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: userMock,
      });
    });

    const expectedActions = [{ type: types.GET_USER, payload: userMock }];

    const store = mockStore({ user: {} });
    return store.dispatch(actions.getUser()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('UPDATE_USER', () => {
    const expectedActions = [{ type: types.UPDATE_USER, payload: updatedUserMock }];

    const store = mockStore({ user: userMock });
    store.dispatch(actions.updateUser(updatedUserMock));
    
    expect(store.getActions()).toEqual(expectedActions);
  });

});