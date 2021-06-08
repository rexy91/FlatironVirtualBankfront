import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

//MDB
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//React Router
import {BrowserRouter} from 'react-router-dom'

// Redux stuff
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// **** No curlys because being exported as default, not a name import from libraries. 

import userReducer from './Components/Redux/userReducer'
// import newsReducer from './Components/Redux/newsReducer'
import Particles from './Components/Layout/Particles';

const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store = {store}>
    <BrowserRouter>
        <Header/>
        <App /> 
        <Particles />
    </BrowserRouter>
</Provider>,

document.getElementById('root'));

