import React, { Component } from 'react';
import data from './data';
import Searcher from './Searcher';

class App extends Component {
  render() {
    return (
      <div className="container --center">
        <Searcher
          data={data}
        />
      </div>
    );
  }
}

export default App;
