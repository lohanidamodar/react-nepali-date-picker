import React from 'react';
import Week from './Week'
import Day from './Day';

const days = ["S","M","T","W","T","F","S"]

class Month extends React.Component{

    weeks = () => {
        const {endDate, weekStart } = this.props;
        let weeks = [];
        for(let i = (8-weekStart); i<=endDate; i+=7){
            let dayEnd = ((endDate-i) < 6) ? (endDate - i) : 6;  
            weeks.push(
                <Week onSelectDate={this.props.onSelectDate} key={i} minDate={i} dayEnd={dayEnd} />
            )
        }
        return weeks;
    }

    render(){
        const { weekStart} = this.props;

        return(
            <div className="month-view">
                <div className="week-header">
                    {days.map((value,index)=>{
                        return <Day key={'header-days'+index} value={value} />
                    })}
                </div>
                <Week onSelectDate={this.props.onSelectDate} dayStart={weekStart} dayEnd={6} minDate={1} />
                {this.weeks()}
            </div>
        )
    }
}


export default Month;