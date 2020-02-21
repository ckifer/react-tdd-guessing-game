import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';

import ServerError from './ServerError';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the ServerError component
 * @function setup
 * @param {object} props
 * @param {object} state - initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ServerError {...setupProps} />);
};

describe('render', () => {
  let wrapper;
  let component;
  beforeEach(() => {
    wrapper = setup();
    component = findByTestAttr(wrapper, 'component-server-error');
  });
  test('should render without error', () => {
    expect(component.length).toBe(1);
  });

  test('should render non-empty text', () => {
    expect(component.text().length).not.toBe(0);
  });
});
