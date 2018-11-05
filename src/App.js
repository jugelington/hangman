import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import WordPicker from './components/WordPicker';
// import TurnIndicator from './components/TurnIndicator';
import WordDisplay from './components/WordDisplay';
import Lives from './components/Lives';
import CharInput from './components/CharInput';
import GuessedLetters from './components/GuessedLetters';
import faker from 'faker';
import NewGame from './components/NewGame';

class App extends Component {
  state = {
    currentWord: [],
    guessedLetters: [],
    lives: 10
  };

  render() {
    return (
      <body>
        <Header />
        <NewGame resetGame={this.resetGame} />
        <WordPicker formatWord={this.formatWord} randomWord={this.randomWord} />
        <WordDisplay currentWord={this.state.currentWord} />
        <Lives lives={this.state.lives} />
        <CharInput makeGuess={this.makeGuess} />
        <GuessedLetters guessedLetters={this.state.guessedLetters} />
      </body>
    );
  }

  componentDidMount() {
    const savedGame = localStorage.getItem('gameState');
    if (savedGame) this.setState(JSON.parse(savedGame));
  }

  componentDidUpdate() {
    this.saveGame();
  }

  saveGame = () => {
    localStorage.setItem('gameState', JSON.stringify(this.state));
  };

  resetGame = () => {
    this.setState({
      currentWord: [],
      guessedLetters: [],
      lives: 10
    });
  };

  randomWord = event => {
    event.preventDefault();

    this.formatWord(faker.lorem.word());
  };

  formatWord = word => {
    const wordArr = word.split('').reduce((array, letter) => {
      array.push({
        char: letter,
        found: false
      });
      return array;
    }, []);

    this.changeCurrentWord(wordArr);
  };

  changeCurrentWord = wordArr => {
    this.setState({ currentWord: wordArr });
  };

  makeGuess = letter => {
    const word = this.state.currentWord;

    if (typeof letter === 'string' && letter.length === 1) {
      const wordAfterGuess = word.map(character => {
        if (character.char.toUpperCase() === letter.toUpperCase()) {
          return { char: character.char, found: true };
        } else {
          const charArr = this.state.currentWord.map(letter => letter.char);
          if (!charArr.includes(letter)) {
            this.incorrectLetter(letter);
          }
          return character;
        }
      });

      this.setState({ currentWord: wordAfterGuess }, () => {
        this.checkForWinOrLoss();
      });
    } else {
      alert('invalid choice');
    }
  };

  incorrectLetter = letter => {
    this.setState(
      {
        guessedLetters: [...this.state.guessedLetters, letter],
        lives: this.state.lives - 1
      },
      () => {
        this.checkForWinOrLoss();
      }
    );
  };

  checkForWinOrLoss = () => {
    const word = this.state.currentWord;
    // if (this.state.lives <= 0) alert('u ded');
    const foundArr = word.map(letter => letter.found);
    if (foundArr.every(value => value === true)) {
      alert('win :)');
    }
  };
}

export default App;
