import 'src/setupTests';
import * as React from 'react';
import Stat from './stat';
import { shallow } from 'enzyme';

describe('Stat', () => {

  const props = {
    data: 222,
    label: 'label'
  };

  const stat = shallow(<Stat {...props} />);

  it('renders properly', () => {
    expect(stat).toMatchSnapshot();
  });

  it('renders correct text', () => {
    expect(stat.find('.desc').text()).toEqual('label');
  });

  it('renders correct number', () => {
    expect(stat.find('.data').text()).toEqual('222');
  });

});
