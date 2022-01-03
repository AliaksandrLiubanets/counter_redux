

// export const SET_MAX_VALUE = 'counter/state-reducer/SET_MAX_VALUE'
// export const SET_START_VALUE = 'counter/state-reducer/SET_START_VALUE'
// export const SET_EDIT_MODE = 'counter/state-reducer/SET_EDIT_MODE'
// export const SET_SECOND_VARIANT = 'counter/state-reducer/SET_SECOND_VARIANT'

export enum StateValues {
  SET_MAX_VALUE = 'counter/state-reducer/SET_MAX_VALUE',
  SET_START_VALUE = 'counter/state-reducer/SET_START_VALUE',
  SET_EDIT_MODE = 'counter/state-reducer/SET_EDIT_MODE',
  SET_SECOND_VARIANT = 'counter/state-reducer/SET_SECOND_VARIANT',
  SET_FIRST_VARIANT_STYLE = 'counter/state-reducer/SET_FIRST_VARIANT_STYLE',
  SET_SECOND_VARIANT_STYLE = 'counter/state-reducer/SET_SECOND_VARIANT_STYLE',
}

const initialState = {
  maxValue: 0,
  startValue: 0,
  editMode: false,
  isSecondVariant: false,
  firstVariantStyle: true,
  secondVariantStyle: false,
}

export type StateType = typeof initialState

export type SetMaxValueType = {
  type: typeof StateValues.SET_MAX_VALUE
  maxValue: number
}

export type SetStartValueType = {
  type: typeof StateValues.SET_START_VALUE
  startValue: number
}

export type SetEditModeType = {
  type: typeof StateValues.SET_EDIT_MODE
  editMode: boolean
}

export type SetSecondVariantType = {
  type: typeof StateValues.SET_SECOND_VARIANT
  isSecondVariant: boolean
}

export type ActionType = SetMaxValueType
    | SetStartValueType
    | SetEditModeType
    | SetSecondVariantType

export const stateReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case StateValues.SET_MAX_VALUE:
      return {...state, maxValue: action.maxValue}
    case StateValues.SET_START_VALUE:
      return {...state, startValue: action.startValue}
    case StateValues.SET_EDIT_MODE:
      return {...state, editMode: action.editMode}
    case StateValues.SET_SECOND_VARIANT:
      return {...state, isSecondVariant: action.isSecondVariant}
    default:
      return state
  }
}
