import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    let date = year + "/" + month + "/" + day;
    this.setState({
      date: date,
      isVisible: false
    })
    this.props.onChange(date)
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

NepaliDateSelect.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default NepaliDateSelect;
