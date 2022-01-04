import React, {useEffect, useReducer} from 'react'
import './App.css'
import s from './styles/styles.module.css'
import {FirstVariant} from './components/FirstVariant'
import {Link, Route, Routes} from 'react-router-dom'
import DisplayCounter from './components/DisplayCounter'
import DisplaySettings from './components/DisplaySettings'
import {setMaxValueAC, setSecondVariantAC, setStartValueAC, stateReducer, StateValues} from './store/stateReducer'

function App() {

    const [state, dispatch] = useReducer(stateReducer, {
        maxValue: 0,
        startValue: 0,
        editMode: false,
        isSecondVariant: false,
    })

    useEffect(() => {
        dispatch(setMaxValueAC(Number(localStorage.getItem('maxValue'))))
        dispatch(setStartValueAC(Number(localStorage.getItem('startValue'))))
        const booleanValue = localStorage.getItem('isSecondVariant')
        booleanValue && dispatch(setSecondVariantAC(JSON.parse(booleanValue)))
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
        localStorage.setItem('isSecondVariant', JSON.stringify(state.isSecondVariant))
    }, [state.maxValue, state.startValue, state.isSecondVariant])

    const setValueToStorage = () => {
    }

    const offSetVariant = () => {
        dispatch({type: StateValues.SET_SECOND_VARIANT, isSecondVariant: false})
    }
    const onSetVariant = () => {
        dispatch({type: StateValues.SET_SECOND_VARIANT, isSecondVariant: true})
    }

    const setMaxValue = (maxValue: number) => dispatch({type: StateValues.SET_MAX_VALUE, maxValue})
    const setStartValue = (startValue: number) => dispatch({type: StateValues.SET_START_VALUE, startValue})
    const setEditMode = (editMode: boolean) => dispatch({type: StateValues.SET_EDIT_MODE, editMode})

    const firstVariantStyle = !state.isSecondVariant ? s.current : ''
    const secondVariantStyle = state.isSecondVariant ? s.current : ''
    const contentStyle = `${state.isSecondVariant ? s.contentCenter : s.content}`

    return <div className="App">
        <div className={s.header}>
            <Link to="/">
                <span className={firstVariantStyle} onClick={offSetVariant}>first variant</span>
            </Link>
            <Link to="/counter">
                <span className={secondVariantStyle} onClick={onSetVariant}>second variant</span>
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
