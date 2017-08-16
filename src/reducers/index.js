import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import InfoReducer from './reducer_info';

const rootReducer = combineReducers({
  info: InfoReducer,
  form: formReducer
});

export default rootReducer;
