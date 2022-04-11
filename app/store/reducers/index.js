import { combineReducers } from 'redux';
import User from './user_reducer';

const rootReducer = combineReducers({
    User,
});
export default rootReducer;
// 앞으로 만들어갈 리듀서를 여기서 묶을것.
