import s from '../styles/styles.module.css'
import {ChangeEvent} from 'react'
import {Button} from './Button'
import {Input} from './Input'
import {Link} from 'react-router-dom'

type DisplaySettingsPropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setValueToStorage: () => void
    setEditMode: (editMode: boolean) => void
    maxValue: number
    startValue: number
    editMode: boolean
    isSecondVariant: boolean
}

function DisplaySettings(props: DisplaySettingsPropsType) {

    const conditionSetToStorage = props.editMode
        && props.startValue >= 0
        && props.maxValue > props.startValue

    const setValueToStorage = () => {

        if (conditionSetToStorage) {
            props.setValueToStorage()
            props.setEditMode(false)
        }
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true)
        props.setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true)
        props.setStartValue(Number(e.currentTarget.value))
    }

    const isUnCorrectValue = props.startValue < 0 || props.startValue >= props.maxValue

    const setStyle = `${isUnCorrectValue && s.button__disabled}`
    const inputMaxStyle = `${(props.maxValue < 0 || props.maxValue <= props.startValue) && s.window__input_error}`
    const inputStartStyle = `${isUnCorrectValue && s.window__input_error}`

    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__settings}>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>
                        max value:
                    </div>
                    <Input className={inputMaxStyle}
                           onChange={onChangeMaxValueHandler}
                           value={props.maxValue}/>
                </div>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>
                        start value:
                    </div>
                    <Input className={inputStartStyle}
                           onChange={onChangeStartValueHandler}
                           value={props.startValue}/>
                </div>
            </div>
        </div>
        <div className={s.window__small}>
            {
                props.isSecondVariant && conditionSetToStorage
                    ? <Link to={'/counter'}>
                        <Button title={'set'}
                                onClick={setValueToStorage}
                                className={setStyle}
                        />
                    </Link>
                    : <Button title={'set'}
                              onClick={setValueToStorage}
                              className={setStyle}
                    />
            }
        </div>

    </div>
}

export default DisplaySettings
