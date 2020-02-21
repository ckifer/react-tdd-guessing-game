import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord, giveUp } from '../../actions';

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
    this.giveUpOnClick = this.giveUpOnClick.bind(this);
  }
  submitGuessedWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' });
    }
  }
  giveUpOnClick(e) {
    e.preventDefault();
    this.props.giveUp();
  }
  render() {
    const contents =
      this.props.success || this.props.gaveUp ? null : (
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
              className='btn btn-primary mb-2 mr-1'
              onClick={this.submitGuessedWord}
            >
              Submit
            </button>
            <button
              data-test='give-up-button'
              className='btn btn-danger mb-2 ml-1'
              onClick={this.giveUpOnClick}
            >
              Give Up!
            </button>
          </div>
        </form>
      );
    return <div data-test='component-input'>{contents}</div>;
  }
}

const mapStateToProps = ({ success, gaveUp }) => {
  return {
    success,
    gaveUp
  };
};

export default connect(mapStateToProps, { guessWord, giveUp })(
  UnconnectedInput
);
