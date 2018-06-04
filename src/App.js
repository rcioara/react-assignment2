import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    userInputText: '',
    userInputLength: 0
  }

  calculateTextLength = (event) => {
    const userInputText = event.target.value;
    this.setState({ userInputText: userInputText, userInputLength: userInputText.length });
  }

  deleteChar = (event, idx) => {
    const userInputTxt = this.state.userInputText;
    const letterToDelete = event.target.innerText;

    const letters = userInputTxt.split('');
    const letterIdx = letters.findIndex(l => l === letterToDelete);

    letters.splice(letterIdx, 1);

    const newInputTxt = letters.join('');

    this.setState({ userInputText: newInputTxt });
  }
  render() {
    return (
      <div className="App">
        <input type="text"
          onChange={this.calculateTextLength}
          value={this.state.userInputText}>
        </input>
        <p>Text length: {this.state.userInputLength}</p>
        <ValidationComponent userInputLength={this.state.userInputLength} />
        {this.state.userInputText.split('')
          .map((ch, idx) => <CharComponent key={idx} clickDeleteChar={(event) => this.deleteChar(event, idx)} letter={ch} />)}
      </div>
    );
  }
}

export default App;
