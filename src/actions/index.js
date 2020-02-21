import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const types = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET_GAME: 'RESET_GAME',
  GIVE_UP: 'GIVE_UP',
  SERVER_ERROR: 'SERVER_ERROR'
};

/**
 * returns redux thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action
 * @function guessedWord
 * @returns {function} Redux Thunk function
 */
export const guessWord = guessedWord => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: types.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount
      }
    });

    if (guessedWord === secretWord) {
      dispatch({
        type: types.CORRECT_GUESS
      });
    }
  };
};

/**
 * returns redux thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action
 * @function guessedWord
 * @returns {function} Redux Thunk function
 */
const getSecretWordDispatch = dispatch => {
  return axios
    .get('http://localhost:3030')
    .then(response => {
      dispatch({
        type: types.SET_SECRET_WORD,
        payload: response.data
      });
    })
    .catch(e => {
      dispatch({
        type: types.SERVER_ERROR
      });
    });
};

/**
 * Returns Redux Thunk function that dispatches GET_SECRET_WORD action
 *     after axios promise resolves
 * @function getSecretWord
 * @returns {function} - Redux Thunk function.
 */
export const getSecretWord = () => {
  return getSecretWordDispatch;
};

/**
 * action creator to reset game and set new secret word
 * @function resetAction
 * @returns {function} Redux Thunk function
 */
export const resetGame = () => {
  return dispatch => {
    dispatch({
      type: types.RESET_GAME
    });
    return getSecretWordDispatch(dispatch);
  };
};

/**
 * Simple action creator that returns GIVE_UP action type.
 * @function giveUp
 * @returns {object} - GIVE_UP action type.
*/
export const giveUp = () => {
  return { type: types.GIVE_UP };
};
