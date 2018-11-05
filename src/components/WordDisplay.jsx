import React from 'react';

const WordDisplay = ({ currentWord }) => {
  return (
    <h2>
      {currentWord.reduce((acc, letter) => {
        return letter.found === true ? (acc += letter.char) : (acc += '_');
      }, '')}
    </h2>
  );
};

export default WordDisplay;
