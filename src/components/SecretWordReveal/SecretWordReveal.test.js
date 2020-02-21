import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';

import SecretWordReveal from './SecretWordReveal';

const secretWord = 'party';
const defaultProps = {
  display: false,
  secretWord
};

/**
 * Factory function to create a ShallowWrapper for the SecretWordReveal component
 * @function setup
 * @param {object} props
 * @param {object} state - initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SecretWordReveal {...setupProps} />);
};

// test prop types
test('does not throw warning with expected props', () => {
  checkProps(SecretWordReveal, defaultProps);
});

describe('render', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-secret-word-reveal');
    expect(component.length).toBe(1);
  });

  test('should show when display is true', () => {
    const wrapper = setup({ display: true });
    const component = findByTestAttr(wrapper, 'reveal-message');
    expect(component.text()).toContain(secretWord);
  });

  test('should NOT show text when display is false', () => {
    const wrapper = setup({ display: false });
    const component = findByTestAttr(wrapper, 'component-secret-word-reveal');
    expect(component.text()).toBe('');
  });
});