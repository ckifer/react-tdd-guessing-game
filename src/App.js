import React, { Component } from 'react';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';
import Input from './components/Input/Input';
import { connect } from 'react-redux';
import { getSecretWord, resetGame } from './actions';
import './App.css';
import NewWordButton from './components/NewWord/NewWordButton';
import SecretWordReveal from './components/SecretWordReveal/SecretWordReveal';
import ServerError from './components/ServerError/ServerError';

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    let contents;
    if (this.props.serverError) {
      contents = <ServerError />;
    } else {
      contents = (
        <div>
          <div>The secret word is {this.props.secretWord}</div>
          <Congrats success={this.props.success} />
          <SecretWordReveal
            secretWord={this.props.secretWord}
            display={this.props.gaveUp}
          />
          <NewWordButton
            display={this.props.success || this.props.gaveUp}
            resetAction={this.props.resetGame}
          />
          <Input />
          <GuessedWords guessedWords={this.props.guessedWords} />
          <NewWordButton display={false} />
        </div>
      );
    }
    return (
      <div className='App container'>
        <h1>Jotto</h1>
        {contents}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord, gaveUp, serverError } = state;
  return { success, guessedWords, secretWord, gaveUp, serverError };
};

const actions = {
  getSecretWord,
  resetGame
};

export default connect(mapStateToProps, actions)(UnconnectedApp);
