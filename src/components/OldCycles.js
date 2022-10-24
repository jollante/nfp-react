import React from "react";
import { ReactComponent as Home } from '../home.svg'

export default function OldCycles(props) {

    const funnyArray = [
        'Nice Try But Here Is No Data',
        'Be Right Back - Hopefully With Data'
    ]

    const funnyGifs = [
        'https://media.giphy.com/media/j6TdvPXdAssootjCKZ/giphy.gif',
        'https://media.giphy.com/media/L1VXD3bEo3Uelzk6EF/giphy.gif',
        'https://media.giphy.com/media/rIq6ASPIqo2k0/giphy.gif',
        'https://media.giphy.com/media/229P3dnAW8RzceKbps/giphy.gif'
    ]

    function randomPicker(array) {
        const randomNumber= Math.floor((Math.random()*array.length))
        return array[randomNumber]
    }
    return (

        <div className="app" id="app">
            <button id="home-btn" onClick={props.handleHomeBtn}><Home /></button>
            {Object.keys(props.allCyclesData).length ? <ul style={{listStyle: 'none', fontSize: 18}}>{Object.keys(props.allCyclesData).map((cycleNumber) => <li onClick={() => props.showCycleData(cycleNumber)}>{cycleNumber}</li>)}</ul> : <div><p>{randomPicker(funnyArray)}</p><img src={randomPicker(funnyGifs)} alt='funny-gif' style={{maxWidth: '100%', height:'auto', minWidth: '100%'}}/></div>}   
        </div>
    )
}