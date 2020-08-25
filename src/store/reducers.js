import { combineReducers } from 'redux';
import profileReducer from 'store/profile/reducer';

const reducers = combineReducers({
	profileReducer,
});

export default reducers;
