import React from 'react';



const DayView = ({value, isToday, onSelectDate, ...props}) => (
    <div onClick={() => onSelectDate && onSelectDate(value)} className="day-view">
        {value}
    </div>
)

export default DayView;