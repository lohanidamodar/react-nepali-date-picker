import React from 'react';

const CalendarHeaderView = ({month, year, ...props}) => (
    <div className="calendar-header-view">
       <button onClick={props.onClickPrevious} className="left"> &lt; </button> {month} {year} <button className="right" onClick={props.onClickNext}> &gt; </button>
    </div>
)

export default CalendarHeaderView;