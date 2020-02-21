import React, { Component } from 'react';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';
import Input from './components/Input/Input';
import { connect } from 'react-redux';
import { getSecretWord, resetGame } from './actions';
import './App.css';
import NewWordButton from './components/NewWord/NewWordButton';

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
    return (
      <div className='App container'>
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <NewWordButton
          display={this.props.success}
          resetAction={this.props.resetGame}
        />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <NewWordButton display={false} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

const actions = {
  getSecretWord,
  resetGame
};

export default connect(mapStateToProps, actions)(UnconnectedApp);
