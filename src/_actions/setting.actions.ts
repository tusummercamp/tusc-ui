
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

function setTimeRange(timeRange: number): AnyAction {
  localStorage.setItem('timeRange', timeRange.toString())
  return { type: settingConstants.TIME_RANGE, timeRange }
}

function setRefresh(refresh: number): AnyAction {
  localStorage.setItem('refresh', refresh.toString())
  return { type: settingConstants.REFRESH, refresh }
}

export const settingActions = {
  setSpeedUrl,
  setOdoUrl,
  setTempUrl,
  setTimeRange,
  setRefresh,
}
