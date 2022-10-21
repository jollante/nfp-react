import './App.css';
import ZyklusDay from './components/ZyklusDay';
import Home from './components/Home.js';
import React, { useState, useEffect } from 'react';
import OldCycles from './components/OldCycles.js'

function App() {
  const [route, setRoute] = useState('home');
  const [cycleNumber, setCycleNumber] = useState(1)
  const [day, setDay] = useState(1);
  const [zyklusData, setZyklusData] = useState({});
  const [allCyclesData, setAllCyclesData] = useState({});
  const [temp, setTemp] = useState('');
  const [period, setPeriod] = useState('');
  const [sex, setSex] = useState('');

  const zyklusDataIsEmpty = () => {
    if (zyklusData[day]) {
      if (zyklusData[day].temp === '' && zyklusData[day].sex === '' && zyklusData[day].period === '') {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  };

  useEffect(() => {
    if (zyklusData[day]) {
      setTemp(zyklusData[day].temp)
      setPeriod(zyklusData[day].period)
      setSex(zyklusData[day].sex)
    } else {
      setTemp('');
      setPeriod('');
      setSex('');
    }
  }, [day, zyklusData])

  const handleTempChange = ({ target }) => {
    setTemp(target.value)
  }

  const handlePeriodChange = ({ target }) => {
    setPeriod(target.value)
  }

  const handleSexChange = ({ target }) => {
    if (target.value === 'on') {
      setSex('YES')
    }
  }

  const onSaveBtnClick = () => {
    if (!zyklusData[day]) {
      setZyklusData((prev) => ({ ...prev, [day]: { temp: temp, period: period, sex: sex } }));
    } else if (zyklusDataIsEmpty) {
      setZyklusData((prev) => ({ ...prev, [day]: { temp: '', period: '', sex: '' } }));
    }
  }

  const increaseCounter = () => {
    setDay(day + 1)

  }

  const decreaseCounter = () => {
    if (day > 1) {
      setDay(day - 1)
    }
  }

  const handleNewCycleBtn = () => {
    setZyklusData({})
    setRoute('newCycle')
    if (Object.keys(allCyclesData).length) {
    setCycleNumber((prev) => prev+1)
    }
  }

  const handleHomeBtn = () => {
    if(Object.keys(zyklusData).length) {
      setAllCyclesData((prev) => ({[cycleNumber]: {...zyklusData}, ...prev}))
    }
    setDay(1)
    setRoute('home')
  }

  const handleOldCyclesBtn = () => {
    setRoute('oldCycles')
  }

  const showCycleData = (cycleNumber) => {
    debugger;
    setZyklusData(allCyclesData[cycleNumber])
    setRoute('newCycle') 
  }

  return (
    <>
      {route === 'home' && <Home handleNewCycleBtn={handleNewCycleBtn} handleOldCyclesBtn={handleOldCyclesBtn}/>}
      {route === 'oldCycles' && <OldCycles allCyclesData={allCyclesData} handleHomeBtn={handleHomeBtn} showCycleData={showCycleData}/>}
      {route === 'newCycle' && <ZyklusDay day={day} zyklusData={zyklusData[day]} increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} onSaveBtnClick={onSaveBtnClick} handleTempChange={handleTempChange} handleSexChange={handleSexChange} handlePeriodChange={handlePeriodChange} zyklusDataIsEmpty={zyklusDataIsEmpty} handleHomeBtn={handleHomeBtn}/>}
    </>
  );
}

export default App;
