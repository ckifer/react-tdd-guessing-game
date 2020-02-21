import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for SecretWordReveal
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const SecretWordReveal = ({ display, secretWord }) => {
  if (display) {
    return (
      <div
        data-test='component-secret-word-reveal'
        className='alert alert-danger'
      >
        <span data-test='reveal-message'>
          The secret word was "{secretWord}"<br />
          Better luck next time!
        </span>
      </div>
    );
  } else {
    return <div data-test='component-secret-word-reveal'></div>;
  }
};

SecretWordReveal.propTypes = {
  display: PropTypes.bool.isRequired,
  secretWord: PropTypes.string
};

export default SecretWordReveal;
