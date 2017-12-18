import React from 'react';
import './day.css';

const DayView = ({value, isToday, ...props}) => (
    <div className="day-view">
        {value}
    </div>
)

export default DayView;