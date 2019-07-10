
import { settingConstants } from '../_constants/setting.constants'
import { AnyAction } from 'redux'

function setSpeedUrl(url: string): AnyAction {
  localStorage.setItem('speedUrl', url)
  return { type: settingConstants.SPEED, speedUrl: url }
}

function setOdoUrl(url: string): AnyAction {
  localStorage.setItem('odoUrl', url)
  return { type: settingConstants.ODO, odoUrl: url }
}

function setTempUrl(url: string): AnyAction {
  localStorage.setItem('tempUrl', url)
  return { type: settingConstants.TEMP, tempUrl: url }
}

export const settingActions = {
  setSpeedUrl,
  setOdoUrl,
  setTempUrl,
}
