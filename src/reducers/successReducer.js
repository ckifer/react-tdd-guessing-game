import { types } from '../actions';

/**
 * @function successReducer
 * @param {array} state
 * @param {object} action
 * @returns {boolean} - new success state
 */
export default (state = false, action) => {
  switch (action.type) {
    case types.CORRECT_GUESS:
      return true;
    case types.RESET_GAME:
      return false;
    default:
      return state;
  }
};
