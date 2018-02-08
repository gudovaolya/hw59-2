import React, { Component } from 'react';
import JokesBuilder from "./containers/JokesBuilder/JokesBuilder";

class App extends Component {
  render() {
    return (
      <div className="container">
        <JokesBuilder/>
      </div>
    );
  }
}

export default App;
