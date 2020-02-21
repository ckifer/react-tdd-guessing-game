import { types } from '../actions';

/**
 * @function serverErrorReducer
 * @param {string} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {string} - New state (depending on action type).
 */
export default (state = false, { type, payload }) => {
  switch (type) {
    case types.SERVER_ERROR:
      return true;
    default:
      return state;
  }
};
