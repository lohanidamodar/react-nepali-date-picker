import React from 'react';
import DevnagariDates from './DevnagariDates';

const DayView = ({value, isToday, onSelectDate, ...props}) => (
    <div onClick={() => onSelectDate && onSelectDate(value)} className="day-view">
        {(value && !isNaN(value)) && DevnagariDates.getNeYear(value)}
        { value && isNaN(value) && value }
    </div>
)

export default DayView;