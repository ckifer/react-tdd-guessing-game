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
    let wrapper = null;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('should render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('render submit btn', () => {
      const submitBtn = findByTestAttr(wrapper, 'submit-btn');
      expect(submitBtn.length).toBe(1);
    });
  });
  describe('word has been guessed ', () => {
    let wrapper = null;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    test('should render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('should NOT render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('should NOT render submit btn', () => {
      const submitBtn = findByTestAttr(wrapper, 'submit-btn');
      expect(submitBtn.length).toBe(0);
    });
  });
});

describe('update state', () => {});

describe('redux props', () => {
  test('should have success pieces of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('should have guessWord action creator prop and it is a function', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
