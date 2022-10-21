import React from "react";

export default function Home(props) {
return(
 
        <div className="app" id="app">
        <div className="app-wrapper grid">
            <button id="new-zyklus" onClick={props.handleOldCyclesBtn}>Old Cycles</button>
            <button id="new-zyklus" style={{marginTop: 15}} onClick={props.handleNewCycleBtn}>Start New Cycle</button>
        </div>
    </div>  
)
}