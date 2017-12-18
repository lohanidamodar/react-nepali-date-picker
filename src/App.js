import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Day from './nepali-date/Day';
import Week from './nepali-date/Week';
import Month from './nepali-date/Month';

import NepaliDateSelect from './nepali-date/NepaliDateSelect';

import NepaliDate from './nepali-date/NepaliDate';
import DateData from './nepali-date/nepali-date-data.json';


class App extends Component {
  render() {
    let months = DateData[2074];
    return (
      <div ref={this.setWrapperRef} className="App">
        {/* <NepaliDateSelect /> */}
        {
          months.map((month,i)=>{
            return(
              <Month key={i} weekStart={month.weekStart} endDate={month.endDate} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
