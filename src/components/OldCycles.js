import React from "react";
import { ReactComponent as Home } from '../home.svg'

export default function OldCycles(props) {

    const funnyArray = [
        'Nice Try But Here Is No Data',
        'Maybe Start A Cycle And Come Back',
        'Nothing To See Here',
        'Be Right Back - Hopefully With Data'
    ]

    const funnyGifs = [
        'https://media.giphy.com/media/StKiS6x698JAl9d6cx/giphy.gif',
        'https://media.giphy.com/media/dXKiD8XysOuhFAJB1f/giphy.gif',
        'https://media.giphy.com/media/hsxHqVGqz4vxg5N7xb/giphy.gif',
        'https://media.giphy.com/media/vwI4mYEHP8k0w/giphy.gif'
    ]

    function randomPicker(array) {
        const randomNumber= Math.floor((Math.random()*array.length))
        return array[randomNumber]
    }
    return (

        <div className="app" id="app">
            <button id="home-btn" onClick={props.handleHomeBtn}><Home /></button>
            {Object.keys(props.allCyclesData).length ? <ul>{Object.keys(props.allCyclesData).map((cycleNumber) => <li onClick={() => props.showCycleData(cycleNumber)}>{cycleNumber}</li>)}</ul> : <div><p>{randomPicker(funnyArray)}</p><img src={randomPicker(funnyGifs)} alt='funny-gif' style={{maxWidth: '100%', height:'auto', minWidth: '100%'}}/></div>}   
        </div>
    )
}