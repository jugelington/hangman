import React from 'react';

const WordDisplay = ({ currentWord }) => {
  return (
    <h1 className="wordDisplay">
      {currentWord.reduce((acc, letter) => {
        return letter.found === true ? (acc += letter.char) : (acc += '_');
      }, '')}
    </h1>
  );
};

export default WordDisplay;
