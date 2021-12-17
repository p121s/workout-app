import { createStore, applyMiddleware } from 'redux';
import reducerAPIData from './reducerAPIData';
import thunk from 'redux-thunk';

const store = createStore(reducerAPIData, applyMiddleware(thunk));

export default store;