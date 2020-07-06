import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import uiReducer from './uiReducer';

 const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer
});

export default rootReducer;