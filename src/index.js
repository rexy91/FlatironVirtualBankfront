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

// **** No curlys because being exported as default, not a name import from libraries. 

import userReducer from './Components/Redux/userReducer'
import newsReducer from './Components/Redux/newsReducer'
import News from './Components/Newscontainer'
import Particles from './Components/Particles';
import { Container } from 'semantic-ui-react';
import Home from './Components/Home';
import { InstantTransfer } from './Components/AccountActions/InstantTransfer';
import { MDBLogin } from './Components/MDBLogin';
// import Particles from 'react-particles-js'

// Will just define a const rootReducer if combining reducers.

// const rootReducer = combineReducers(
//     {
//      // This will be the whole state when mstp. 
//       news: newsReducer,
//       user: userReducer
//     }

//   )

// Need to define (or import) reducer before creating
// TO use Redux dev tool, need the 2nd argument.

const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
<Provider store = {store}>
    
    <BrowserRouter>
        <Header/>
        <App /> 
        <Particles />
        <Footer />
    </BrowserRouter>
</Provider>,

document.getElementById('root'));

