import { types } from '../actions';

const initialState = null;

/**
 * @function secretWordReducer
 * @param {array} state
 * @param {object} action
 * @returns {string} - new secretWord state
 */
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SECRET_WORD:
      return payload;
    default:
      return state;
  }
};
