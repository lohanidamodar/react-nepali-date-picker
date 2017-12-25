import React from 'react';
import Month from './Month';
import CalendarHeader from './CalendarHeader';
import NepaliDateData from './nepali-date-data.json';

class PopupDialog extends React.Component{

    componentWillMount() {
        this.setState({
            year: this.props.year,
            month: this.props.month,
            day: this.props.day
        })
    }

    handleNextClick = () => {
        var nextMonth = this.state.month + 1;
        var nextYear = (nextMonth > 12)?this.state.year + 1 : this.state.year;
        nextMonth = (nextMonth > 12)? 1 : nextMonth;
        this.setState({
            month: nextMonth,
            year: nextYear  
        })
    }
    
    handlePreviousClick = () => {
        var nextMonth = this.state.month - 1;
        var nextYear = (nextMonth === 0)?this.state.year - 1 : this.state.year;
        nextMonth = (nextMonth === 0)? 12 : nextMonth;
        this.setState({
            month: nextMonth,
            year: nextYear  
        })
    }

    handleSelectDate = ( day ) => {
        this.props.onSelectDate({
            year: this.state.year,
            month: this.state.month,
            day: day
        })
    }

    render(){
        const { year, month } = this.state;
        let weekStart = NepaliDateData[year][month - 1].weekStart;
        let endDate = NepaliDateData[year][month - 1].endDate;
        return(
            <div className="popup-dialog">
                <CalendarHeader onClickNext={this.handleNextClick} onClickPrevious={this.handlePreviousClick} month={month} year={year} />
                <Month onSelectDate={this.handleSelectDate} weekStart={weekStart} endDate={endDate} />
            </div>
        )
    }
}

export default PopupDialog;