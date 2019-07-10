import { combineReducers } from 'redux'

import alert from './alert.reducer'
import data from './data.reducer'

const rootReducer = combineReducers({
    alert,          // state.alert
    data,           // state.data
})

export default rootReducer
export type AppState = ReturnType<typeof rootReducer>
