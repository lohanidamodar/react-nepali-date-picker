import React from 'react';
import Month from './Month';
import './popup-dialog.css';

class PopupDialog extends React.Component{

    render(){
        return(
            <div className="popup-dialog">
                <Month weekStart={1} endDate={29} />
            </div>
        )
    }
}

export default PopupDialog;