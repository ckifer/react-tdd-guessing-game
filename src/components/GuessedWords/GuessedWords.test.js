import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';

import GuessedWords from './GuessedWords';

// if this is ever changed, check all uses
const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    }
  ]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords compoenent
 * @function setup
 * @param {object} props
 * @param {object} state - initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

// testing prop types
test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess words', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if words are guessed', () => {});
