import React from 'react';

class WordPicker extends React.Component {
  state = {
    newWord: ''
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a word:
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.newWord}
            />
            <button>submit</button>
          </label>
        </form>
        <form>
          <button onClick={this.props.randomWord}>Random Word</button>
        </form>
      </section>
    );
  }

  handleChange = event => {
    this.setState({ newWord: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.formatWord(this.state.newWord);
    this.setState({ newWord: '' });
  };
}

export default WordPicker;
