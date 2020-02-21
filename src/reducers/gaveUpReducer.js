import { types } from '../actions';

/**
 * @function giveUpReducer
 * @param {array} state array of guessed words
 * @param {object} action action to be reduced
 * @returns {boolean} - new giveUp state
 */
export default (state = false, { payload, type }) => {
  switch (type) {
    case types.GIVE_UP:
      return true;
    case types.RESET_GAME:
      return false;
    default:
      return state;
  }
};
