import React, { Component } from 'react';

import './App.css';
import InputBar from './components/input_bar';
import Spelling from './components/spelling';

type AppState = {
  name: string | null
}

class App extends Component<{}, AppState> {
  state: AppState = {name: null}

  updateName = (input: string): void => {
    this.setState({ name: input});
  }

  render() {
    return (
      <div className="App">
        <h1>Spell your name the Berlin way!</h1>
        <InputBar submitFn={this.updateName} />
        <Spelling name={this.state.name} />
      </div>
    )
  }
}

export default App;
