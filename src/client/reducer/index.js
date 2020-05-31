import {combineReducers} from 'redux'
import pageListReducer from './pageListReducer'
import currentSelectComponentReducer from './currentSelectComponentReducer'
import currentSelectPageReducer from './currentSelectPageReducer'
import componentPanelReducer from './componentPanelReducer'
import undoStackReducer from './undoStackReducer'

export default combineReducers({
  pageListReducer,
  currentSelectComponentReducer,
  currentSelectPageReducer,
  componentPanelReducer,
  undoStackReducer
})