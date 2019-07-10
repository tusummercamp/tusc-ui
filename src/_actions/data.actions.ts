import axios from 'axios'
import { dataConstants } from '../_constants/data.constants'
import { ActionCreator, Dispatch } from 'redux'
import { store } from '../_helpers/store';

const getSpeed: ActionCreator<any> = (from: number, to: number) => {
  return async (dispatch: Dispatch) => {

    const { speedUrl } = store.getState().settings

    dispatch(request())

    console.time('Speed')
    try {
      const data = await axios.get(`${speedUrl}?from=${from}&to=${to}`)
      dispatch(success(data.data))
    } catch (err) {
      console.error(err.response ? err.response.data : err.message)
      dispatch(failure())
    }
    console.timeEnd('Speed')

  }

  function request() { return { type: dataConstants.SPEED_REQUEST } }
  function success(data: any) { return { type: dataConstants.SPEED_SUCCESS, data } }
  function failure() { return { type: dataConstants.SPEED_FAILURE } }
}

const getOdo: ActionCreator<any> = (from: number, to: number) => {
  return async (dispatch: Dispatch) => {

    const { odoUrl } = store.getState().settings

    dispatch(request())

    console.time('ODO')
    try {
      const data = await axios.get(`${odoUrl}?from=${from}&to=${to}`)
      dispatch(success(data.data))
    } catch (err) {
      console.error(err.response ? err.response.data : err.message)
      dispatch(failure())
    }
    console.timeEnd('ODO')

  }

  function request() { return { type: dataConstants.ODO_REQUEST } }
  function success(data: any) { return { type: dataConstants.ODO_SUCCESS, data } }
  function failure() { return { type: dataConstants.ODO_FAILURE } }
}

const getTemp: ActionCreator<any> = (from: number, to: number) => {
  return async (dispatch: Dispatch) => {

    const { tempUrl } = store.getState().settings

    dispatch(request())

    console.time('Temp')
    try {
      const data = await axios.get(`${tempUrl}?from=${from}&to=${to}`)
      dispatch(success(data.data))
    } catch (err) {
      console.error(err.response ? err.response.data : err.message)
      dispatch(failure())
    }
    console.timeEnd('Temp')

  }

  function request() { return { type: dataConstants.TEMP_REQUEST } }
  function success(data: any) { return { type: dataConstants.TEMP_SUCCESS, data } }
  function failure() { return { type: dataConstants.TEMP_FAILURE } }
}

export const dataActions = {
  getSpeed,
  getOdo,
  getTemp,
}
