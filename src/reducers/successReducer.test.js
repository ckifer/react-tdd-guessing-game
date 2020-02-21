import { types } from '../actions';
import successReducer from './successReducer';

describe('test success reducer', () => {
  test('should return default initial state when no action passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });
  test('should return state of true when correct word is guessed', () => {
    const newState = successReducer(undefined, { type: types.CORRECT_GUESS });
    expect(newState).toBe(true);
  });
  test('should return state of false when game is reset', () => {
    const newState = successReducer(true, { type: types.RESET_GAME });
    expect(newState).toBe(false);
  });
});
