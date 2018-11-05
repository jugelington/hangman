import React from 'react';

const NewGame = ({ resetGame }) => {
  return (
    <form onSubmit={resetGame}>
      <button>New Game</button>
    </form>
  );
};

export default NewGame;
