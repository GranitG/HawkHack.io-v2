import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import LandingPage from './views/Landing/Landing';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Dashboard from './views/Dashboard/Dashboard';
import ResetPassword from './views/ResetPassword/ResetPassword';
import NotFound from './views/NotFound/NotFound';
import Verified from './views/Verified/Verified';

import PrivateRoute from './assets/utils/PrivateRoute';
import theme from './theme';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/verify/:token" component={Verified} />
        <Route exact path="/reset/:token" component={ResetPassword} />
        <Route component={NotFound} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>

);

export default App;
