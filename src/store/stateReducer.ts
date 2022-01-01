const initialState = {
  maxValue: 0,
  startValue: 0,
  editMode: false,
  isSecondVariant: false
}

type StateType = typeof initialState

type ActionType = SetMaxValueType

export const stateReducer = (state: StateType = initialState, action: ActionType): StateType => {
  return state
}