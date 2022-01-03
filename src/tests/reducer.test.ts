import {stateReducer, StateType, StateValues} from '../store/stateReducer'

let state: StateType

beforeEach(() => {
    state = {
        maxValue: 0,
        startValue: 0,
        editMode: false,
        isSecondVariant: false,
    }
})

test('set start value', () => {

    const result = stateReducer(state,{type: StateValues.SET_START_VALUE, startValue: 1})

    expect(result.startValue).toBe(1)
})

