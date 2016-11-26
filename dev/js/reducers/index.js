import {combineReducers} from 'redux';
import TodosReducer from './reducer-todos';

const allReducers = combineReducers({
	todos:TodosReducer,
});

export default allReducers;