const SET_MAX_VALUE = 'counter/state-reducer/SET_MAX_VALUE'
const SET_START_VALUE = 'counter/state-reducer/SET_START_VALUE'
const SET_EDIT_MODE = 'counter/state-reducer/SET_EDIT_MODE'
const SET_SECOND_VARIANT = 'counter/state-reducer/SET_SECOND_VARIANT'

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

type SetStartValueType = {
  type: typeof SET_START_VALUE
  startValue: number
}

type SetEditModeType = {
  type: typeof SET_EDIT_MODE
  editMode: boolean
}

type SetSecondVariantType = {
  type: typeof SET_SECOND_VARIANT
  isSecondVariant: boolean
}

type ActionType = SetMaxValueType | SetStartValueType | SetEditModeType | SetSecondVariantType

export const stateReducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case SET_MAX_VALUE:
      return {...state, maxValue: action.maxValue}
  }
  return state
}