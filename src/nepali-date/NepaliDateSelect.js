import React, { Component } from 'react';
import PopupDialog from './PopupDialog';
import './date-select.css';


class NepaliDateSelect extends Component {
  state = {
    isVisible: false
  }

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
  render() {
    return (
      <div ref={this.setWrapperRef} className="nepali-date-select">
        <div onClick={this.togglePopup} className="date-display"></div>
        {this.state.isVisible && <PopupDialog />}
      </div>
    );
  }
}

export default NepaliDateSelect;
