import React, { Component } from 'react';
import './App.css';

const vowels = 'AEIOUaeiou';

function CheckVowel(props) {
    if (props.character.length === 0) {
        return <p>Nothing has been entered.</p>
    } else if (props.character.length>1) {
        return <p>Too many characters.</p>
    } else if (vowels.includes(props.character)) {
        return <p>You have entered a vowel.</p>
    } else if (props.character === 'y' | props.character === 'Y') {
        return <p>Y is sometimes a vowel, but context is important here.</p>
    } else {
        return <p>Nah, that wasn't a vowel.</p>
    }
}

class App extends Component {
  constructor (props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { character: '' }
    }
  handleChange(e) {
      this.setState({character: e.target.value})
  }
  render() {
    return (
      <div>
          <input value={this.state.character} onChange={this.handleChange} />
          <CheckVowel character={this.state.character} />
      </div>
    );
  }
}

export default App;
