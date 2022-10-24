import React, {useState} from 'react';
import { ReactComponent as ArrowLeft } from '../arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../arrowRight.svg'
import { ReactComponent as Home } from '../home.svg'
import { ReactComponent as SettingsIcon } from '../settingsIcon.svg'
import dayjs from 'dayjs';

export default function ZyklusDay(props) {

    return (
        <div className="app" id="zyklus-data-app">
            <div className="app-wrapper">
                <div className="back-btn-zyklus-number-wrapper">
                    <button id="home-btn" onClick={props.handleHomeBtn}><Home /></button>
                    <h1>Cycle <span id="zyklus-number">{props.cycleNumber}</span></h1>
                </div>
                <div className="zyklus-input-wrapper">
                    <div className="day-settings-wrapper" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center'}}>
                        <p>{props.day}</p>
                        <p>{dayjs(props.date).format('DD.MM.YYYY')}</p>
                        <button onClick={props.showChangeFirstDay} style={{marginTop: 0, padding: '0.6em 0.8em', lineHeight: 0}}><SettingsIcon /></button>
                    </div>
                    <fieldset className="zyklus-data">
                        <label htmlFor="temp">Temp</label>
                        {props.zyklusData === undefined || props.zyklusDataIsEmpty() ? <input id="temp" type="number" min="35" max="42" step="0.05" onChange={props.handleTempChange} /> : <p style={{ marginTop: 0, marginBottom: 10, paddingLeft: 0 }}>{props.zyklusData.temp}</p>}
                        <label htmlFor="period">Period</label>
                        {props.zyklusData === undefined || props.zyklusDataIsEmpty() ? <select id="period" onChange={props.handlePeriodChange}>
                            <option value="" ></option>
                            <option value="keine" >keine</option>
                            <option value="schmier">schmier</option>
                            <option value="leicht">leicht</option>
                            <option value="normal">normal</option>
                            <option value="stark">stark</option>
                        </select> : <p style={{ marginTop: 0, marginBottom: 10, paddingLeft: 0 }}>{props.zyklusData.period}</p>}

                        <label htmlFor="sex">Sex</label>
                        {props.zyklusData === undefined || props.zyklusDataIsEmpty() ? <input id="temp" type="checkbox" min="35" max="42" step="0.05" onChange={props.handleSexChange} /> : <p style={{ marginTop: 0, marginBottom: 10, paddingLeft: 0 }}>{props.zyklusData.sex} </p>}
                    </fieldset>
                    <div className="btn-wrapper-zyklus-data">
                        <button type='button' onClick={props.decreaseCounter} id="back-btn-zyklus-data"><ArrowLeft /></button>
                        <button type="button" id="save-data" onClick={props.onSaveBtnClick}>SAVE</button>
                        <button type="button" id="edit-btn" className="hidden">Edit</button>
                        <button type='button' onClick={props.increaseCounter}><ArrowRight /></button>
                    </div>
                    <p id="fade" className="visibility-hidden">gespeichert</p>
                </div>
            </div>
        </div>
    )
}