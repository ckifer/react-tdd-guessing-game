import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../actions';

export class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <div className='form-group'>
          <input
            data-test='input-box'
            type='text'
            className='mb-2 mx-sm-3 form-control'
            placeholder='enter guess...'
          />
          <button
            data-test='submit-btn'
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form>
    );
    return <div data-test='component-input'>{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return {
    success
  };
};

export default connect(mapStateToProps, { guessWord })(Input);
