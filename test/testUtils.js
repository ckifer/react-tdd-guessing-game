import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/reducers/index.js';
import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../src/configureStore.js';

/**
 * Return ShallowWrapper containing nodes with the given data-test value
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

/**
 * Check component for expected prop types
 * @param {Component} component
 * @param {object} conformingProps
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};

/**
 * Create testing store with imported reducers, middleware, and initial state
 * globals: rootReducer, middleware
 * @param {ShallowWrapper} wrapper
 * @param {object} initialState
 * @returns {Store} redux store
 */
export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
