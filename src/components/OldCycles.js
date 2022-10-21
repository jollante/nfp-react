import React from "react";
import { ReactComponent as Home } from '../home.svg'

export default function OldCycles(props) {
    return (

        <div className="app" id="app">
            <button id="home-btn" onClick={props.handleHomeBtn}><Home /></button>
            {Object.keys(props.allCyclesData).length ? <ul>{Object.keys(props.allCyclesData).map((cycleNumber) => <li onClick={() => props.showCycleData(cycleNumber)}>{cycleNumber}</li>)}</ul> : <p>No Cycles</p>}   
        </div>
    )
}