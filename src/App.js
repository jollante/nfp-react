import './App.css';
import ZyklusDay from './components/ZyklusDay';
import ChangeFirstDay from './components/ChangeFirstDay';
import Home from './components/Home.js';
import React, { useState, useEffect } from 'react';
import OldCycles from './components/OldCycles.js'
import dayjs from 'dayjs';

function App() {
  const [route, setRoute] = useState('home');
  const [cycleNumber, setCycleNumber] = useState(1)
  const [day, setDay] = useState(1);
  const [zyklusData, setZyklusData] = useState({});
  const [allCyclesData, setAllCyclesData] = useState({});
  const [temp, setTemp] = useState('');
  const [period, setPeriod] = useState('');
  const [sex, setSex] = useState('');
  const [date, setDate] = useState(null);
  const [firstDay, setFirstDay] = useState(null);

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

  useEffect(() => {
    if (day === 1) {
      setDate(firstDay);  
    }
  },[day,firstDay])

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
    const newDate = dayjs(date).add(1, 'day')
    setDate(newDate)
  }

  const decreaseCounter = () => {
    if (day > 1) {
      setDay(day - 1)
      const newDate = dayjs(date).subtract(1, 'day')
      setDate(newDate)
    }
  }

  const handleNewCycleBtn = () => {
    setDate(firstDay)
    setRoute('newCycle')
    setFirstDay(dayjs())
    setDay(1)
    setZyklusData({})

    if (Object.keys(allCyclesData).length && !zyklusDataIsEmpty()) {
      setCycleNumber((prev) => prev + 1)
    }
  }

  const handleHomeBtn = () => {
    if (Object.keys(zyklusData).length) {
      setAllCyclesData((prev) => ({ [cycleNumber]: { firstDay: firstDay, data: { ...zyklusData } }, ...prev }))
    }
    setDay(1)
    setRoute('home')
  }

  const handleOldCyclesBtn = () => {
    setRoute('oldCycles')
  }

  const showCycleData = (cycleNumber) => {
    setZyklusData(allCyclesData[cycleNumber].data)
    setRoute('newCycle')
  }

  const showChangeFirstDay = (e) => {
    setRoute('changeFirstDay')
  }

  const changeFirstDay = (value) => {
    setFirstDay(value)
    setRoute('newCycle')
  }
  
  return (
    <>
      {route === 'home' && <Home handleNewCycleBtn={handleNewCycleBtn} handleOldCyclesBtn={handleOldCyclesBtn} />}
      {route === 'changeFirstDay' && <ChangeFirstDay changeFirstDay={changeFirstDay} handleHomeBtn={handleHomeBtn} />}
      {route === 'oldCycles' && <OldCycles allCyclesData={allCyclesData} handleHomeBtn={handleHomeBtn} showCycleData={showCycleData} />}
      {route === 'newCycle' && <ZyklusDay date={date} cycleNumber={cycleNumber} day={day} zyklusData={zyklusData[day]} increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} onSaveBtnClick={onSaveBtnClick} handleTempChange={handleTempChange} handleSexChange={handleSexChange} handlePeriodChange={handlePeriodChange} zyklusDataIsEmpty={zyklusDataIsEmpty} handleHomeBtn={handleHomeBtn} showChangeFirstDay={showChangeFirstDay} />}
    </>
  );
}

export default App;
