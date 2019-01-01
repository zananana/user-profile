import './setupTests';
import * as React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  const app = shallow(<App />);

  it('renders without crashing', () => {
    expect(app).toMatchSnapshot();
  });
  
  it('includes a connected UserProfile', () => {
    expect(app.find('Connect(UserProfile)').exists()).toBe(true);
  });
  
  it('includes a connected ProfileComments', () => {
    expect(app.find('Connect(ProfileComments)').exists()).toBe(true);
  });

})
