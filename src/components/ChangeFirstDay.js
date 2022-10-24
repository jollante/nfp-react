import React, {useState} from 'react';
import dayjs from 'dayjs';

export default function ChangeFirstDay(props) {

    const [ newFirstDay, setNewFirstDay ] = useState(props.firstDay)
    
    const getFirstDay = ({target}) => {
        setNewFirstDay(target.value)
    }

    return (
        <div id='app' className="app">
            <button id="home-btn" onClick={props.handleHomeBtn}>Back</button>
            <h1>Change First Day Of Period</h1>
            <form  >
                <input type='date' name='new-first-day' onChange={getFirstDay} value={dayjs(newFirstDay).format('YYYY-MM-DD')}/>
                <button type='button' onClick={() => props.changeFirstDay(newFirstDay)}>Change First Day</button>
            </form>
        </div>
    )
}