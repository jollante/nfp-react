import './App.css';
import ZyklusDay from './components/ZyklusDay';
import ChangeFirstDay from './components/ChangeFirstDay';
import Home from './components/Home.js';
import React, { useState, useEffect } from 'react';
import OldCycles from './components/OldCycles.js'
import dayjs from 'dayjs';

function App() {
  const [route, setRoute] = useState('home');
  const [mode, setMode] = useState('edit');
  const [cycleNumber, setCycleNumber] = useState(1)
  const [day, setDay] = useState(1);
  const [zyklusData, setZyklusData] = useState({ 1: { temp: '', period: 'off', sex: 'off' } });
  const [allCyclesData, setAllCyclesData] = useState({});
  const [temp, setTemp] = useState('');
  const [period, setPeriod] = useState('');
  const [sex, setSex] = useState('');
  const [date, setDate] = useState(null);
  const [firstDay, setFirstDay] = useState(null);

  const zyklusDataIsEmpty = (day) => {
    if (zyklusData[day]) {
      if ((zyklusData[day].temp === '' && zyklusData[day].sex === 'off' && zyklusData[day].period === 'off')) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  };

  useEffect(() => {
    if (day === 1) {
      setDate(firstDay);
    }
  }, [day, firstDay])

  const handleTempChange = ({ target }) => {
    setTemp(target.value)
  }

  const handlePeriodChange = ({ target }) => {
    setPeriod(target.value)
  }

  const handleSexChange = ({ target }) => {
    setSex(target.value)
  }

  const onSaveBtnClick = () => {
    setZyklusData((prev) => ({ ...prev, [day]: { temp: temp, period: period, sex: sex } }));
    setMode('view')
  }

  const onEditBtnClick = () => {
    setMode('edit')
  }

  const increaseCounter = () => {
    const newDay = (day + 1)
    setDay(newDay)
    const newDate = dayjs(date).add(1, 'day')
    setDate(newDate)
    if (zyklusData[newDay]) {
      setTemp(zyklusData[newDay].temp)
      setSex(zyklusData[newDay].sex)
      setPeriod(zyklusData[newDay].period)
      setMode('view')
    } else {
      setTemp('')
      setSex('off')
      setPeriod('off')
      setMode('edit')
    }
  }

  const decreaseCounter = () => {
    if (day > 1) {
      const newDay = (day - 1)
      setDay(newDay)
      const newDate = dayjs(date).subtract(1, 'day')
      setDate(newDate)
      if (zyklusData[newDay] && zyklusDataIsEmpty(newDay) === false) {
        setTemp(zyklusData[newDay].temp)
        setSex(zyklusData[newDay].sex)
        setPeriod(zyklusData[newDay].period)
        setMode('view') 
      }
      else {
        setTemp('')
        setSex('off')
        setPeriod('off')
        setMode('edit')
      }

    }
  }

  const handleNewCycleBtn = () => {

    setDate(firstDay)
    setRoute('newCycle')
    setFirstDay(dayjs())
    setDay(1)
    setTemp('')
    setSex('off')
    setPeriod('off')
    setMode('edit')

    if (Object.keys(allCyclesData).length) {
      setCycleNumber(Object.keys(allCyclesData).length + 1)
    }
  }

  const handleHomeBtn = () => {

    if (route === 'newCycle' && (zyklusDataIsEmpty(1) === false || Object.keys(zyklusData).length > 1)) {
      setAllCyclesData((prev) => ({ ...prev, [cycleNumber]: { firstDay: firstDay, data: { ...zyklusData } } }))
      setZyklusData({ 1: { temp: '', period: 'off', sex: 'off' } })
      setTemp('')
      setSex('off')
      setPeriod('off')
      setMode('edit')
    }
    setDay(1)
    setRoute('home')

  }

  const handleOldCyclesBtn = () => {
    setRoute('oldCycles')
  }

  const showCycleData = (cycleNumber) => {
    setCycleNumber(parseInt(cycleNumber))
    setZyklusData(allCyclesData[cycleNumber].data)
    setTemp(allCyclesData[cycleNumber].data[day].temp)
    setPeriod(allCyclesData[cycleNumber].data[day].period)
    setSex(allCyclesData[cycleNumber].data[day].sex)
    if (allCyclesData[cycleNumber].data[day]) {
      setMode('view')
    }
    setRoute('newCycle')
  }

  const showChangeFirstDay = (e) => {
    setRoute('changeFirstDay')
  }

  const changeFirstDay = (value) => {
    setFirstDay(value)
    setRoute('newCycle')
    if (day === 1) {
      setDate(dayjs(date))
    } else {
      const newDate = dayjs(value).add([day - 1], 'day')
      setDate(newDate)
    }
  }

  return (
    <>
      {route === 'home' && <Home handleNewCycleBtn={handleNewCycleBtn} handleOldCyclesBtn={handleOldCyclesBtn} />}
      {route === 'changeFirstDay' && <ChangeFirstDay firstDay={firstDay} changeFirstDay={changeFirstDay} handleHomeBtn={handleHomeBtn} />}
      {route === 'oldCycles' && <OldCycles allCyclesData={allCyclesData} handleHomeBtn={handleHomeBtn} showCycleData={showCycleData} />}
      {route === 'newCycle' && <ZyklusDay onEditBtnClick={onEditBtnClick} mode={mode} temp={temp} sex={sex} date={date} period={period} cycleNumber={cycleNumber} day={day} zyklusData={zyklusData[day]} increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} onSaveBtnClick={onSaveBtnClick} handleTempChange={handleTempChange} handleSexChange={handleSexChange} handlePeriodChange={handlePeriodChange} zyklusDataIsEmpty={zyklusDataIsEmpty} handleHomeBtn={handleHomeBtn} showChangeFirstDay={showChangeFirstDay} />}
    </>
  );
}

export default App;
