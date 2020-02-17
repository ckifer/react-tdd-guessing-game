import { correctGuess, types } from '.';

describe('correctGuess', () => {
  test('should return action with type CORRECT_GUESS', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: types.CORRECT_GUESS });
  });
});
