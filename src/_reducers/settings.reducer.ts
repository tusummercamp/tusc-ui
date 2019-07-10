import { settingConstants } from  '../_constants/setting.constants'
import { AnyAction } from 'redux';

type State = {
  speedUrl: string,
  tempUrl: string,
  odoUrl: string,
}

const initialState: State = {
  speedUrl: localStorage.getItem('speedUrl') || 'https://upn8o73jw8.execute-api.us-east-1.amazonaws.com/Prod/data',
  tempUrl: localStorage.getItem('tempUrl') || 'https://i90jji9q5j.execute-api.us-east-1.amazonaws.com/Prod/data',
  odoUrl: localStorage.getItem('odoUrl') || 'https://g9eyv3jby5.execute-api.us-east-1.amazonaws.com/Prod/data',
}

export default function settings(state: State = initialState, action: AnyAction) {

  switch (action.type) {

    case settingConstants.SPEED:
      return { ...state, speedUrl: action.speedUrl }

    case settingConstants.ODO:
      return { ...state, odoUrl: action.odoUrl }

    case settingConstants.TEMP:
      return { ...state, tempUrl: action.tempUrl }

    default:
      return state

  }
}
