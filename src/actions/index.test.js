import moxios from 'moxios';
import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from '.';

describe('get secret word action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('should add response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    // return the promise so the assertion waits for the async call to finish
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });

  describe('update `serverError` to true', () => {
    test('when server returns 4xx status code', () => {
      const store = storeFactory();

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404
        });
      });

      return store.dispatch(getSecretWord()).then(() => {
        const newState = store.getState();
        expect(newState.serverError).toBe(true);
      });
    });

    test('when server returns 5xx status code', () => {
      const store = storeFactory();

      moxios.wait(() => {
        const req = moxios.requests.mostRecent();
        req.respondWith({
          status: 500
        });
      });

      return store.dispatch(getSecretWord()).then(() => {
        const newState = store.getState();
        expect(newState.serverError).toBe(true);
      });
    });
  });
});
