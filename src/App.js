import React, { Component } from 'react';
import './App.css';

import NepaliDateSelect from './nepali-date/NepaliDateSelect';


class App extends Component {
  handleDateChange = (date) => {
    console.log(date);
  }
  render() {
    return (
      <div ref={this.setWrapperRef} className="App">
        <NepaliDateSelect onChange={this.handleDateChange} />
      </div>
    );
  }
}

export default App;
