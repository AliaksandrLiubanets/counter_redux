import React, {useEffect, useState} from 'react'
import './App.css'
import s from './styles/styles.module.css'
import {FirstVariant} from './components/FirstVariant'
import {Link, Route, Routes} from 'react-router-dom'
import DisplayCounter from './components/DisplayCounter'
import DisplaySettings from './components/DisplaySettings'

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [isSecondVariant, setIsSecondVariant] = useState<boolean>(false)

    useEffect(() => {
        setMaxValue(Number(localStorage.getItem('maxValue')))
        setStartValue(Number(localStorage.getItem('startValue')))
        const booleanValue = localStorage.getItem('isSecondVariant')
        booleanValue && setIsSecondVariant(JSON.parse(booleanValue))
    }, [])

    const setValueToStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('isSecondVariant', JSON.stringify(isSecondVariant))
    }

    const offSetVariant = () => {
        setIsSecondVariant(false)
        localStorage.setItem('isSecondVariant', JSON.stringify(false))
    }
    const onSetVariant = () => {
        setIsSecondVariant(true)
        localStorage.setItem('isSecondVariant', JSON.stringify(true))
    }

    const contentStyle = `${isSecondVariant ? s.contentCenter : s.content}`

    return <div className="App">
        <div className={s.header}>
            <Link to="/">
                <span onClick={offSetVariant}>first variant</span>
            </Link>
            <Link to="/counter">
                <span onClick={onSetVariant}>second variant</span>
            </Link>
        </div>
        <div className={contentStyle}>
            <Routes>
                <Route path="/" element={<FirstVariant
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    setValueToStorage={setValueToStorage}
                    setEditMode={setEditMode}
                    maxValue={maxValue}
                    startValue={startValue}
                    editMode={editMode}
                    isSecondVariant={isSecondVariant}
                />}
                />
                <Route path="/counter" element={<DisplayCounter
                    editMode={editMode}
                    maxValue={maxValue}
                    startValue={startValue}
                    isSecondVariant={isSecondVariant}
                />}
                />
                <Route path="/settings" element={<DisplaySettings
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    setValueToStorage={setValueToStorage}
                    setEditMode={setEditMode}
                    maxValue={maxValue}
                    startValue={startValue}
                    editMode={editMode}
                    isSecondVariant={isSecondVariant}
                />}
                />
            </Routes>
        </div>
    </div>
}

export default App
