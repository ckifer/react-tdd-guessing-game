import { types } from '../actions';

/**
 * @function guessedWordsReducer
 * @param {array} state array of guessed words
 * @param {object} action action to be reduced
 * @returns {boolean} - new guessedWords state
 */
export default (state = [], { payload, type }) => {
  switch (type) {
    case types.GUESS_WORD:
      return [...state, payload];
    default:
      return state;
  }
};
