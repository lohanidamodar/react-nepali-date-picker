import React from 'react';
import Day from './Day';

class WeekView extends React.Component{

    filler = dayStart => {
        let filler = [];
        for(let i=0; i<dayStart; i++){
            filler.push(<Day key={'filler'+i} />)
        }
        return filler;
    }

    weekDays = (minDate, dayStart, dayEnd, onSelectDate) => {
        let weekDays = [];
        dayStart = dayStart?dayStart:0;
        let date = minDate;
        for(let i=dayStart; i<=dayEnd; i++){
            weekDays.push(<Day onSelectDate={onSelectDate} key={'day'+date} value={date} />)
            date++;
        }
        return weekDays;
    }

    render(){
        const {dayStart, dayEnd, minDate, onSelectDate} = this.props;
        return(
            <div className="week-view">
                {this.filler(dayStart)}
                {this.weekDays(minDate,dayStart, dayEnd, onSelectDate)}
                {this.filler(6-dayEnd)}
            </div>
        )
    }

}




export default WeekView;