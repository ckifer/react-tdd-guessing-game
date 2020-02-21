import React from 'react';
import { shallow } from 'enzyme';

import App, { UnconnectedApp } from './App';
import { storeFactory } from '../test/testUtils';

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} initialState - initial state
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('App redux props', () => {
  let wrapper;
  const success = false;
  const gaveUp = false;
  const secretWord = 'party';
  const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];

  beforeEach(() => {
    wrapper = setup({
      success,
      gaveUp,
      secretWord,
      guessedWords
    });
  });

  test('should have success pieces of state as prop', () => {
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('should have secretWord pieces of state as prop', () => {
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test('should have guessedWords pieces of state as prop', () => {
    const secretWordProp = wrapper.instance().props.guessedWords;
    expect(secretWordProp).toEqual(guessedWords);
  });

  test('should have `getSecretWord` action creator as function prop', () => {
    const secretWordProp = wrapper.instance().props.getSecretWord;
    expect(secretWordProp).toBeInstanceOf(Function);
  });
});

test('should run `getSecretWord` on app mount', () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWord: [],
    gaveUp: false
  };

  // setup app with getSecretWordMock as prop
  const wrapper = shallow(<UnconnectedApp {...props} />);

  // run lifecycle method
  wrapper.instance().componentDidMount();

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
