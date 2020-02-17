import { types } from '../actions';

/**
 * @function successReducer
 * @param {array} state
 * @param {object} action
 * @returns {boolean} - new success state
 */
export default (state, action) => {
  switch (action.type) {
    case types.CORRECT_GUESS:
      return true;
    default:
      return false;
  }
};
