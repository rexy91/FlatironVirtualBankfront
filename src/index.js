import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Header'
import Footer from './Components/Footer'

//MDB
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//React Router
import {BrowserRouter} from 'react-router-dom'

// Redux stuff
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import userReducer from './Components/Redux/userReducer'


// Will just define a const rootReducer if combining reducers.
// `
// const rootReducer = combineReducers(
//     {
//       snacks: snackReducer,
//       userInfo: userReducer
//     }
//   )`
// Need to define (or import) reducer before creating
// TO use Redux dev tool, need the 2nd argument.
const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store = {store}>
    <BrowserRouter>
        <Header/>
        <App /> 
        {/* <Footer /> */}
    </BrowserRouter>
</Provider>,
document.getElementById('root'));

