import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';

import Congrats from './Congrats';

// if this is ever changed, check all uses
const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props
 * @param {object} state - initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message', () => {
  const wrapper = setup({ success: true });
  const msg = findByTestAttr(wrapper, 'congrats-message');
  expect(msg.text()).not.toBe(0);
});

// testing prop types
test('does not throw warning with expected props', () => {
  checkProps(Congrats, defaultProps);
});
