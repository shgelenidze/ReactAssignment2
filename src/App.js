import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
      inputText: null,
      inputCharacters: null
  };

  charactersCountHandler = (event) => {
      const charactersCount = event.target.value.length;
      this.setState({
        inputText: event.target.value,
        inputCharacters: charactersCount
      });
  };

  removeCharacter = (charactersIndex) => {
      let inputText = this.state.inputText.split("");
      inputText.splice(charactersIndex,1);
      this.setState({
        inputText: inputText.join("")
      });
  };

  render() {
    let characters = null;
    if (this.state.inputCharacters > 0) {
        characters = (
          <div>
              {
                this.state.inputText.split('').map((character, index) => {
                  return <Char
                            character={character}
                            removeCharacter={this.removeCharacter.bind(this, index)}
                            key={index}
                          />
                })
              }
          </div>
        )

    }
    return (
      <div className="App">
        <h1>Enter Text and Count Characters</h1>
        <input type="text" onChange={this.charactersCountHandler} />
        <p>{this.state.inputCharacters}</p>
        <Validation textLength={this.state.inputCharacters} />
        {characters}
      </div>
    );
  }
}

export default App;
