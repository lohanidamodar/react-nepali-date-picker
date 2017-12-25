import React from 'react';
import PropTypes from 'prop-types';
import DevnagariDates from './DevnagariDates';

const CalendarHeaderView = ({month, year, ...props}) => (
    <div className="calendar-header-view">
       <button onClick={props.onClickPrevious} className="left"> &lt; </button> {DevnagariDates.getNeMonthName(month)} {DevnagariDates.getNeYear(year)} <button className="right" onClick={props.onClickNext}> &gt; </button>
    </div>
)

CalendarHeaderView.propTypes = {
    onClickPrevious: PropTypes.func.isRequired,
    onClickNext: PropTypes.func.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
}

export default CalendarHeaderView;