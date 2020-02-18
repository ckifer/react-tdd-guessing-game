import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input
          data-test='input-box'
          type='text'
          className='mb-2 mx-sm-3'
          placeholder='enter guess...'
        />
        <button
          data-test='submit-btn'
          type='submit'
          className='btn btn-primary'
        >
          Submit
        </button>
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

export default connect(mapStateToProps)(Input);
