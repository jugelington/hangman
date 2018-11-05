import React from 'react';

const Lives = props => {
  return (
    <p>{props.lives > 0 ? <p>Lives: {props.lives}</p> : <p>U ded :(</p>}</p>
  );
};

export default Lives;
