import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import App from './App';
it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
  // expect(wrapper).toContainReact(welcome);
});