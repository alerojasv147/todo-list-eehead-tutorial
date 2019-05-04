import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, storeEnhancers());