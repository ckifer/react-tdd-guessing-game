import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const types = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
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
export const getSecretWord = () => {
  return dispatch => {
    return axios.get('http://localhost:3030').then(res => {
      dispatch({
        type: types.SET_SECRET_WORD,
        payload: res.data
      });
    });
  };
};
