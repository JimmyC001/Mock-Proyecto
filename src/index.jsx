import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Theme from './theme/Theme';
import { ThemeProvider } from '@mui/material/styles';

import Login from './view/login/Login';
import Home from './view/home/Home';
import Register from './view/register/Register';
import NotFound from './view/error/404/NotFound';
import Update from './view/update/Update';
import CreateService from './view/createService/CreateService';
import History from './view/history/History';
import DriverFound from './view/driverFound/DriverFound';
import SearchingDriver from './view/searchingDriver/SearchingDriver';
import ServiceDetails from './view/serviceDetails/ServiceDetails';
import RateDriver from './view/rateDriver/RateDriver';
import { init as initUsers } from './assets/users';
import { init as initServices } from './assets/service';

initUsers();
initServices();

const App = () => {
    return(
        <ThemeProvider theme={Theme}>
            <div>
                <Routes>
                    <Route path='/' Component={Home}/>
                    <Route path='/login' Component={Login}/>
                    <Route path='/register' Component={Register}/>
                    <Route path='/update' Component={Update}/>
                    <Route path='/createService' Component={CreateService}/>
                    <Route path='/history' Component={History}/>
                    <Route path='/driverFound' Component={DriverFound}/>
                    <Route path='/searchingDriver' Component={SearchingDriver}/>
                    <Route path='/serviceDetails' Component={ServiceDetails}/>
                    <Route path='/rateDriver' Component={RateDriver}/>
                    <Route path='*' Component={NotFound}/>
                </Routes>
            </div>
        </ThemeProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode> 
);

// reportWebVitals();
