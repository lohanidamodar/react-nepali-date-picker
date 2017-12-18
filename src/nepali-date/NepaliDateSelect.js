import React, { Component } from 'react';
import PopupDialog from './PopupDialog';
import NepaliDate from './NepaliDate';
import './calendar.css';


class NepaliDateSelect extends Component {
  state = {
    isVisible: false
  }

  today = NepaliDate.fromgregorian(new Date());

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) =>{
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({isVisible: false});
    }
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  }

  togglePopup = () => {
    this.setState({isVisible: !this.state.isVisible})
  }

  handleDateSelect = ({year,month,day}) => {
    this.setState({
      date: year + "/" + month + "/" + day,
      isVisible: false
    })
  }

  render() {
    return (
      <div ref={this.setWrapperRef} className="nepali-date-select">
        <div onClick={this.togglePopup} className="date-display">{this.state.date}</div>
        {this.state.isVisible && <PopupDialog onSelectDate={this.handleDateSelect} year={this.today.nepaliYear} month={this.today.nepaliMonth} day={this.today.day} />}
      </div>
    );
  }
}

export default NepaliDateSelect;
