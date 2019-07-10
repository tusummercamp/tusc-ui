import { settingConstants } from  '../_constants/setting.constants'
import { AnyAction } from 'redux';

type State = {
  speedUrl: string,
  tempUrl: string,
  odoUrl: string,
  timeRange: Number,
  refresh: Number,
}

const initialState: State = {
  speedUrl: localStorage.getItem('speedUrl') || 'https://upn8o73jw8.execute-api.us-east-1.amazonaws.com/Prod/data',
  tempUrl: localStorage.getItem('tempUrl') || 'https://i90jji9q5j.execute-api.us-east-1.amazonaws.com/Prod/data',
  odoUrl: localStorage.getItem('odoUrl') || 'https://g9eyv3jby5.execute-api.us-east-1.amazonaws.com/Prod/data',
  timeRange: parseInt(localStorage.getItem('timeRange') || '3600000'),
  refresh: parseInt(localStorage.getItem('refresh') || '5000'),
}

export default function settings(state: State = initialState, action: AnyAction) {

  switch (action.type) {

    case settingConstants.SPEED:
      return { ...state, speedUrl: action.speedUrl }

    case settingConstants.ODO:
      return { ...state, odoUrl: action.odoUrl }

    case settingConstants.TEMP:
      return { ...state, tempUrl: action.tempUrl }

    case settingConstants.TIME_RANGE:
      return { ...state, timeRange: action.timeRange }

    case settingConstants.REFRESH:
      return { ...state, refresh: action.refresh }

    default:
      return state

  }
}
