import { types } from '../actions';

/**
 * @function guessedWordsReducer
 * @param {array} state array of guessed words
 * @param {object} action action to be reduced
 * @returns {boolean} - new guessedWords state
 */
export default (state = null, action) => {
  switch (action.type) {
    case types.GUESS_WORD:
      return null;
    default:
      return state;
  }
};
