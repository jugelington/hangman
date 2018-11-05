import React from 'react';

const GuessedLetters = props => {
  return (
    <p>
      Guessed Letters: <br />
      {props.guessedLetters.map(letter => letter + ' ')}
    </p>
  );
};

export default GuessedLetters;
