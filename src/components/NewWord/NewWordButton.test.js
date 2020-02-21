import React from 'react';
import { shallow } from 'enzyme';

import {
  storeFactory,
  findByTestAttr,
  checkProps
} from '../../../test/testUtils';
import NewWordButton from './NewWordButton';

const defaultProps = {
  display: false
};

/**
 * Factory function to create a ShallowWrapper for the NewWord component
 * @function setup
 * @param {object} props
 * @param {object} state - initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<NewWordButton {...setupProps} />);
  return wrapper;
};

// testing prop types
test('does not throw warning with expected props', () => {
  checkProps(NewWordButton, defaultProps);
});

describe('render', () => {
  test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-new-word-btn');
    expect(component.length).toBe(1);
  });

  test('renders no text when `display` prop is false', () => {
    const wrapper = setup({ display: false, resetAction: () => {} });
    const component = findByTestAttr(wrapper, 'component-new-word-btn');
    expect(component.text()).toBe('');
  });

  test('calls resetAction on button click', () => {
    const resetActionMock = jest.fn();
    const wrapper = setup({ display: true, resetAction: resetActionMock });
    const resetBtn = findByTestAttr(wrapper, 'component-new-word-btn');

    resetBtn.simulate('click');
    expect(resetActionMock.mock.calls.length).toBe(1);
  });
});
