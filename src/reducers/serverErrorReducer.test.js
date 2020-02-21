import { types } from '../actions';
import serverErrorReducer from './serverErrorReducer';

describe('test server error reducer', () => {
  test('should return default initial state when no action passed', () => {
    const newState = serverErrorReducer(undefined, {});
    expect(newState).toBe(false);
  });
  test('should return error state when type is set', () => {
    const newState = serverErrorReducer(undefined, {
      type: types.SERVER_ERROR
    });
    expect(newState).toBe(true);
  });
});
