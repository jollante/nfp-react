import React, {useState} from 'react';
import dayjs from 'dayjs';

export default function ChangeFirstDay(props) {

    const [ newFirstDay, setNewFirstDay ] = useState(props.firstDay)
    
    const getFirstDay = ({target}) => {
        setNewFirstDay(target.value)
    }

    return (
        <div id='app' className="app">
            <button style={{padding: '0.4em 0.6em'}} id="home-btn" onClick={props.handleBackBtn}>Back</button>
            <h1 style={{margin: 10, textAlign: 'center', color: '#b14f8c'}}>Change First Day</h1>
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input style={{marginTop: 10, marginBottom: 0}} type='date' name='new-first-day' onChange={getFirstDay} value={dayjs(newFirstDay).format('YYYY-MM-DD')}/>
                <button type='button' onClick={() => props.changeFirstDay(newFirstDay)}>Save Changes</button>
            </form>
        </div>
    )
}