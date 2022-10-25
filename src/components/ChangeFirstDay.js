import React, { useState } from 'react';
import dayjs from 'dayjs';

export default function ChangeFirstDay(props) {

    const [newFirstDay, setNewFirstDay] = useState(props.firstDay)

    const getFirstDay = ({ target }) => {
        setNewFirstDay(target.value)
    }

    return (
        <div id='app' className="app">
            <div style={{display: 'grid', gridTemplateColumns:'1fr 3fr', marginBottom: 20 }}>
                <button style={{ padding: '0.4em 0.6em', marginTop: 0 }} id="home-btn" onClick={props.handleBackBtn}>Back</button>
                <h1 style={{ margin: 10, textAlign: 'center', color: '#b14f8c' }}>Change First Day<span style={{fontWeight: 'normal', fontSize: 14, display: 'block'}}> Of Period</span></h1>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid #42ada3', borderRadius: 5, padding: '40px 0px'  }}>
                <input style={{ marginBottom: 0 }} type='date' name='new-first-day' onChange={getFirstDay} value={dayjs(newFirstDay).format('YYYY-MM-DD')} />
                <button type='button' onClick={() => props.changeFirstDay(newFirstDay)}>Save</button>
            </form>
        </div>
    )
}