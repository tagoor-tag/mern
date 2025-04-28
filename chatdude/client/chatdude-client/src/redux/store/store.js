import { legacy_createStore, combineReducers , applyMiddleware} from 'redux';
import { logger} from 'redux-logger'
import userReducer from '../reduser/userReducer';
import chatReducer from '../reduser/chatReducer';
import messageReducer from '../reduser/messageReducer';
const combinedReducer = combineReducers({
    userReducer,
    chatReducer,
    messageReducer,
  });

var mystore = legacy_createStore(combinedReducer , applyMiddleware(logger));

export default mystore;