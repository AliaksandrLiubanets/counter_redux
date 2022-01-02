import React, {useEffect, useReducer, useState} from 'react'
import './App.css'
import s from './styles/styles.module.css'
import {FirstVariant} from './components/FirstVariant'
import {Link, Route, Routes} from 'react-router-dom'
import DisplayCounter from './components/DisplayCounter'
import DisplaySettings from './components/DisplaySettings'
import {stateReducer, StateValues} from './store/stateReducer'

function App() {

    // const [maxValue, setMaxValue] = useState<number>(0)
    // const [startValue, setStartValue] = useState<number>(0)
    // const [editMode, setEditMode] = useState<boolean>(false)
    // const [isSecondVariant, setIsSecondVariant] = useState<boolean>(false)

    const [currentStyle, setCurrentStyle] = useState<boolean>(false)

    const [state, dispatch] = useReducer(stateReducer, {
        maxValue: 0,
        startValue: 0,
        editMode: false,
        isSecondVariant: false,
        firstVariantStyle: true,
        secondVariantStyle: false,
    })

    useEffect(() => {
        // setMaxValue(Number(localStorage.getItem('maxValue')))
        dispatch({type: StateValues.SET_MAX_VALUE, maxValue: Number(localStorage.getItem('maxValue'))})
        // setStartValue(Number(localStorage.getItem('startValue')))
        dispatch({type: StateValues.SET_START_VALUE, startValue: Number(localStorage.getItem('startValue'))})
        const booleanValue = localStorage.getItem('isSecondVariant')
        // booleanValue && setIsSecondVariant(JSON.parse(booleanValue))
        booleanValue && dispatch({type: StateValues.SET_SECOND_VARIANT, isSecondVariant: JSON.parse(booleanValue)})
    }, [])

    const setValueToStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
        localStorage.setItem('isSecondVariant', JSON.stringify(state.isSecondVariant))
    }

    const offSetVariant = () => {
        // setIsSecondVariant(false)
        dispatch(type: StateValues.)
        dispatch({type: StateValues.SET_SECOND_VARIANT, isSecondVariant: false})
        localStorage.setItem('isSecondVariant', JSON.stringify(false))
    }
    const onSetVariant = () => {
        // setIsSecondVariant(true)
        dispatch({type: StateValues.SET_SECOND_VARIANT, isSecondVariant: true})
        localStorage.setItem('isSecondVariant', JSON.stringify(true))
    }

    // const contentStyle = `${isSecondVariant ? s.contentCenter : s.content}`
    const contentStyle = `${state.isSecondVariant ? s.contentCenter : s.content}`

    const setMaxValue = (maxValue: number) => dispatch({type: StateValues.SET_MAX_VALUE, maxValue})
    const setStartValue = (startValue: number) => dispatch({type: StateValues.SET_START_VALUE, startValue})
    const setEditMode = (editMode: boolean) => dispatch({type: StateValues.SET_EDIT_MODE, editMode})



    return <div className="App">
        <div className={s.header}>
            <Link to="/">
                <span className={currentStyle ? s.current : ''} onClick={offSetVariant}>first variant</span>
            </Link>
            <Link to="/counter">
                <span className={currentStyle ? s.current : ''} onClick={onSetVariant}>second variant</span>
            </Link>
        </div>
        <div className={contentStyle}>
            <Routes>
                <Route path="/" element={<FirstVariant
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    setValueToStorage={setValueToStorage}
                    setEditMode={setEditMode}
                    maxValue={state.maxValue}
                    startValue={state.startValue}
                    editMode={state.editMode}
                    isSecondVariant={state.isSecondVariant}
                />}
                />
                <Route path="/counter" element={<DisplayCounter
                    editMode={state.editMode}
                    maxValue={state.maxValue}
                    startValue={state.startValue}
                    isSecondVariant={state.isSecondVariant}
                />}
                />
                <Route path="/settings" element={<DisplaySettings
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    setValueToStorage={setValueToStorage}
                    setEditMode={setEditMode}
                    maxValue={state.maxValue}
                    startValue={state.startValue}
                    editMode={state.editMode}
                    isSecondVariant={state.isSecondVariant}
                />}
                />
            </Routes>
        </div>
    </div>
}

export default App
