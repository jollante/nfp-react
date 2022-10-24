import React, {useState} from 'react';

export default function ChangeFirstDay(props) {
    const [ newFirstDay, setNewFirstDay ] = useState(null)
    
    const getFirstDay = ({target}) => {
        setNewFirstDay(target.value)
    }

    return (
        <div id='app' className="app">
            <button id="home-btn" onClick={props.handleHomeBtn}>Back</button>
            <form  >
                <input type='date' name='new-first-day' onChange={getFirstDay}/>
                <button type='button' onClick={() => props.changeFirstDay(newFirstDay)}>Change First Day</button>
            </form>
        </div>
    )
}