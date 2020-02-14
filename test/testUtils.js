import checkPropTypes from 'check-prop-types';

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
