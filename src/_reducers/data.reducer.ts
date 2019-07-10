import { dataConstants } from  '../_constants/data.constants'
import { AnyAction } from 'redux';

type Item = {
  time: Number,
  value: Number,
}

type State = {
  speed: Array<Item>,
  rpm: Array<Item>,
  temp: Array<Item>,
}

const initialState: State = { speed: [], rpm: [], temp: [], }

export default function data(state: State = initialState, action: AnyAction) {

  switch (action.type) {

    case dataConstants.SPEED:
      return { ...state, speed: action.speed }

    case dataConstants.RPM:
      return { ...state, rpm: action.rpm }

    case dataConstants.TEMP:
      return { ...state, temp: action.rpm }

    default:
      return state

  }
}
