import 'src/setupTests';
import * as actions from './commentsActions';
import * as types from './types/types';
import { mockup } from 'src/setupTests';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const commentsMock = mockup.comments;
const addCommentMock = mockup.addComment;

describe('commentsActions tests', () => {

    beforeEach(() => {
      moxios.install();
    });
  
    afterEach(() => {
      moxios.uninstall();
    });
  
    it('GET_COMMENTS', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: commentsMock,
            });
          });

        const expectedActions = [{ type: types.GET_COMMENTS, payload: commentsMock }];

        const store = mockStore({ comments: {} });
        return store.dispatch(actions.getComments()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          });
    });

    it('ADD_COMMENT', () => {
        const expectedActions = [{ type: types.ADD_COMMENT, payload: addCommentMock }];

        const store = mockStore({ comments: {} });
        store.dispatch(actions.addComments(addCommentMock));
    
        expect(store.getActions()).toEqual(expectedActions);
    });
});
