import { storeFactory } from '../../test/testUtils';
import { guessWord } from '../actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('should update correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        gaveUp: false,
        success: true,
        serverError: false,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });

    test('should update correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        gaveUp: false,
        success: false,
        serverError: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('should update correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        gaveUp: false,
        success: true,
        serverError: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
    test('should update correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        gaveUp: false,
        serverError: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
