export const types = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
};

/**
 * returns redux thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action
 * @function guessedWord
 * @returns {function} Redux Thunk function
 */
export const guessWord = guessedWord => {
  return (dispatch, getState) => {};
};
