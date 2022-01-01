const SET_MAX_VALUE = 'counter/state-reducer/SET_MAX_VALUE'

const initialState = {
  maxValue: 0,
  startValue: 0,
  editMode: false,
  isSecondVariant: false
}

type StateType = typeof initialState

type SetMaxValueType = {
  type: typeof SET_MAX_VALUE
  maxValue: number
}

type ActionType = SetMaxValueType

export const stateReducer = (state: StateType = initialState, action: ActionType): StateType => {
  return state
}