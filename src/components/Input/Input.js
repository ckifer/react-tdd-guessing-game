import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../actions';

/**
 * @method constructor
 */
export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    // init state
    this.state = {
      currentGuess: ''
    };

    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }
  submitGuessedWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' });
    }
  }
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <div className='form-group'>
          <input
            data-test='input-box'
            type='text'
            className='mb-2 mx-sm-3 form-control'
            placeholder='enter guess...'
            value={this.state.currentGuess}
            onChange={e => this.setState({ currentGuess: e.target.value })}
          />
          <button
            data-test='submit-btn'
            type='submit'
            className='btn btn-primary'
            onClick={this.submitGuessedWord}
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

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
