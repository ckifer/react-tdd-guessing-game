import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for reset button.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const NewWordButton = props => {
  if (props.display) {
    return (
      <button
        data-test='component-new-word-btn'
        className='btn btn-primary spacer-bottom'
        onClick={props.resetAction}
      >
        New Word
      </button>
    );
  } else {
    return <div data-test='component-new-word-btn'></div>;
  }
};

NewWordButton.propTypes = {
  display: PropTypes.bool.isRequired,
  resetAction: PropTypes.func
};

export default NewWordButton;
