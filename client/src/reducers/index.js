import { combineReducers} from 'redux'
import internReducer from './internReducer'
import leaveReducer from './leaveReducer'
import nspReducers from './nspReducers';





export default combineReducers({
    item : internReducer, // rest of the reducers can be added here
    leave: leaveReducer,
    nsp: nspReducers
})