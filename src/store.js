import { createStore, combineReducers } from 'redux'
import settingsReducer from './reducers/settings.js'

const rootReducer = combineReducers({
  settings: settingsReducer,
})

export default createStore(rootReducer)