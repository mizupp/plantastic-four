import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import ourReducers from './reducers/ourReducers';

const store = createStore(ourReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;