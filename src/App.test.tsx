import './setupTests';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import UserProfile from './components/userProfile/userProfile';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing enzyme!', () => {
  shallow(<App />);
}); 

it('includes UserProfile', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<UserProfile />)).toEqual(true)
});
