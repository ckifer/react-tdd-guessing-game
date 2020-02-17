export const types = {
  CORRECT_GUESS: 'CORRECT_GUESS'
};

/**
 * @function correctGuess
 * @returns {object} action object with correct guess type
 */
export const correctGuess = () => {
  return { type: types.CORRECT_GUESS };
};
