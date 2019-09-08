import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../components/counter/counter.js';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('<Counter />', () => {
  it('Is alive at start', () => {
    let component = shallow(<Counter />);
    expect(component.find('span').exists()).toBeTruthy();
  });
  it('Changes state on Up', () => {
    let component = mount(<Counter />);
    let button = component.find('.up-clicker');
    button.simulate('click');
    expect(component.state('count')).toEqual(1);
  });
  it('Changes state on Down', () => {
    let component = mount(<Counter />);
    let button = component.find('.down-clicker');
    button.simulate('click');
    expect(component.state('count')).toEqual(-1);
  });
  it('renders correctly', () => {
    const render = renderer.create(<Counter />).toJSON();
    expect(render).toMatchSnapshot();
  });
});