import React from 'react';

const GuessedLetters = props => {
  return (
    <p>Guessed Letters: {props.guessedLetters.map(letter => letter + ' ')}</p>
  );
};

export default GuessedLetters;
