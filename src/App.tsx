import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DefaultLayout from "./layouts/default-layout/DefaultLayout";
import Dashboard from "./components/dashboard/Dashboard";
import GlobalStyles from "./GlobalStyles";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Switch>
                <DefaultLayout
                    exact
                    path="/"
                    component={Dashboard}
                    location={null}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;