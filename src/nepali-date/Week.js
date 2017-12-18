import React from 'react';
import Day from './Day';
import './week.css';

const filler = dayStart => {
    let filler = [];
    for(let i=0; i<dayStart; i++){
        filler.push(<Day key={'filler'+i} />)
    }
    return filler;
}

const weekDays = (minDate, dayStart, dayEnd) => {
    let weekDays = [];
    dayStart = dayStart?dayStart:0;
    let date = minDate;
    for(let i=dayStart; i<=dayEnd; i++){
        weekDays.push(<Day key={'day'+date} value={date} />)
        date++;
    }
    return weekDays;
}

const WeekView = ({dayStart, dayEnd, minDate, ...props}) => (
    <div className="week-view">
        {filler(dayStart)}
        {weekDays(minDate,dayStart, dayEnd)}
        {filler(6-dayEnd)}
    </div>
)

export default WeekView;