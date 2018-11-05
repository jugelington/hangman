import React from 'react';

class CharInput extends React.Component {
  state = {
    currentChar: ''
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Letter: </h2>
        <input
          className="charInputBox"
          type="text"
          value={this.state.currentChar}
          onChange={this.handleChange}
        />
        <button>submit</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ currentChar: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.makeGuess(this.state.currentChar);
    this.setState({ currentChar: '' });
  };
}

export default CharInput;
