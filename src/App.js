import React, { Component } from 'react';
import './App.css';

import NepaliDateSelect from './nepali-date/NepaliDateSelect';


class App extends Component {
  render() {
    return (
      <div ref={this.setWrapperRef} className="App">
        <NepaliDateSelect />
      </div>
    );
  }
}

export default App;
