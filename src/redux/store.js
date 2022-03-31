// 5th step
//after performing reducer now i have to store the data in store.js

import { createStore , applyMiddleware } from 'redux';
import logger from 'redux-logger';// to determine the previous state and next state
import thunk from 'redux-thunk'; //thunk middlewear ; because after making the api request we need to dispatch a new redux action
import rootReducer from './rootReducer'; 

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {

middleware.push(logger);

}

export const store= createStore (rootReducer, applyMiddleware(...middleware));


// const store = createStore(rootReducer);
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store ;



//### redux thunk is used to perform assynchoras operation ; it is use to pause the api response till we get the data from api request ; after response comes dispatch will released & go to reducer . we used it inside action creator // https://www.youtube.com/watch?v=pSzY5kh9MCs


// https://github.com/zalmoxisus/redux-devtools-extension#installation 
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() this for react dev tool extension
///**** now i have to pass the store inside Provider as props ; so that it will declear as global data & any one can access that;   in side of the index.js file */