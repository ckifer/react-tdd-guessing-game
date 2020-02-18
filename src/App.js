import React, { Component } from 'react';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';
import './App.css';
import { Input } from './components/Input/Input';

class App extends Component {
  render() {
    return (
      <div className='App container'>
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords
          guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
