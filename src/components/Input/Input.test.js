import React from 'react';
import { shallow } from 'enzyme';

import findByTestAttr, { storeFactory } from '../../../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - initial state
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

setup();

describe('render', () => {
  describe('word has not been guessed ', () => {
    test('should render component without error', () => {});
    test('render input box', () => {});
    test('render submit btn', () => {});
  });
  describe('word has been guessed ', () => {
    test('should NOT render component without error', () => {});
    test('should NOT render input box', () => {});
    test('should NOT render submit btn', () => {});
  });
});

describe('update state', () => {});
