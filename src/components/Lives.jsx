import React from 'react';

const Lives = ({ lives, winner }) => {
  return (
    <p>
      {lives <= 0 ? (
        <p className="dead">u ded :(</p>
      ) : winner ? (
        <p className="win">win :)</p>
      ) : (
        <p>Lives: {lives}</p>
      )}
    </p>
  );
};

export default Lives;
