import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory, findByTestAttr } from '../../../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - initial state
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed ', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('should render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('render input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');
      expect(component.length).toBe(1);
    });
    test('render submit btn', () => {
      const component = findByTestAttr(wrapper, 'submit-btn');
      expect(component.length).toBe(1);
    });
  });
  describe('word has been guessed ', () => {
    test('should NOT render component without error', () => {});
    test('should NOT render input box', () => {});
    test('should NOT render submit btn', () => {});
  });
});

describe('update state', () => {});
