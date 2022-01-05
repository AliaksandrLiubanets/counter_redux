import React, {useEffect} from 'react'
import './App.css'
import s from './styles/styles.module.css'
import {FirstVariant} from './components/FirstVariant'
import {Link, Route, Routes} from 'react-router-dom'
import DisplayCounter from './components/DisplayCounter'
import DisplaySettings from './components/DisplaySettings'
import {setEditModeAC, setMaxValueAC, setSecondVariantAC, setStartValueAC, StateType} from './store/stateReducer'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from './store/store'

function App() {

    const state = useSelector<AppStateType, StateType>((state) => state.state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMaxValueAC(Number(localStorage.getItem('maxValue'))))
        dispatch(setStartValueAC(Number(localStorage.getItem('startValue'))))
        const booleanValue = localStorage.getItem('isSecondVariant')
        booleanValue && dispatch(setSecondVariantAC(JSON.parse(booleanValue)))
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
        localStorage.setItem('isSecondVariant', JSON.stringify(state.isSecondVariant))
    }, [state.maxValue, state.startValue, state.isSecondVariant])

    const offSetVariant = () => {
        dispatch(setSecondVariantAC(false))
    }
    const onSetVariant = () => {
        dispatch(setSecondVariantAC(true))
    }

    const setMaxValue = (maxValue: number) => dispatch(setMaxValueAC(maxValue))
    const setStartValue = (startValue: number) => dispatch(setStartValueAC(startValue))
    const setEditMode = (editMode: boolean) => dispatch(setEditModeAC(editMode))

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
