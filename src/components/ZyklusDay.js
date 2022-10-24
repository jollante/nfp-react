import React, {useState} from 'react';
import { ReactComponent as ArrowLeft } from '../arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../arrowRight.svg'
import { ReactComponent as Home } from '../home.svg'
import { ReactComponent as SettingsIcon } from '../settingsIcon.svg'
import dayjs from 'dayjs';

export default function ZyklusDay(props) {

    const periodOptionsArray = [
        '',
        'keine',
        'schmier',
        'leicht',
        'normal',
        'stark'
    ]

    return (
        <div className="app" id="zyklus-data-app">
            <div className="app-wrapper">
                <div className="back-btn-zyklus-number-wrapper" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center'}}>
                    <button id="home-btn" onClick={props.handleHomeBtn}><Home /></button>
                    <h1>Cycle <span id="zyklus-number">{props.cycleNumber}</span></h1>
                    <button onClick={props.showChangeFirstDay} style={{marginTop: 0, padding: '0.6em 0.8em', lineHeight: 0}}><SettingsIcon /></button>
                </div>
                <div className="zyklus-input-wrapper">
                    <div className="day-settings-wrapper" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center'}}>
                        <p>{props.day}</p>
                        <p>{dayjs(props.date).format('DD.MM.YYYY')}</p>
                    </div>
                    <fieldset className="zyklus-data">
                        <label htmlFor="temp">Temp</label>
                        <input disabled={props.mode === 'view'} id="temp" type="number" min="35" max="42" step="0.05" onChange={props.handleTempChange} value={props.temp}/>
                        <label htmlFor="period">Period</label>
                        <select disabled={props.mode === 'view'} id="period" onChange={props.handlePeriodChange} value={props.period}>
                            {periodOptionsArray.map(option => <option value={option} key={option}>{option}</option>)}
                        </select> 
                        <label htmlFor="sex">Sex</label>
                     <input disabled={props.mode === 'view'} id="temp" type="checkbox" min="35" max="42" step="0.05" onChange={props.handleSexChange} checked={props.sex === 'on'} /> 
                    </fieldset>
                    <div className="btn-wrapper-zyklus-data">
                        <button type='button' onClick={props.decreaseCounter} id="back-btn-zyklus-data"><ArrowLeft /></button>
                        {props.mode === 'edit' && <button type="button" id="save-data" onClick={props.onSaveBtnClick}>SAVE</button>}
                        {props.mode === 'view' && <button type="button" id="edit-btn" onClick={props.onEditBtnClick}>Edit</button>}
                        <button type='button' onClick={props.increaseCounter}><ArrowRight /></button>
                    </div>
                    <p id="fade" className="visibility-hidden">gespeichert</p>
                </div>
            </div>
        </div>
    )
}