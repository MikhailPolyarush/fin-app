import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import DataService from './services/dataService';
import DataServiceContext from './components/data-service-context';
import store from './store/store';

const dataService = new DataService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <DataServiceContext.Provider value={dataService}>
                <Router>
                    <App/>
                </Router>
            </DataServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
  ,
  document.getElementById('root')
);
