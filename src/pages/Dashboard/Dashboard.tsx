import React from 'react';
import './Dashboard.css';
import { BrowserRouter as Router, Route, useRouteMatch } from 'react-router-dom';

// Components and Pages
import { MyClass } from '../../components/MyClass/MyClass';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { Home } from './Home/Home';

export function Dashboard() {

    let { path, url } = useRouteMatch();

    return (
        <div className="Dashboard">
            <SideMenu />
            <Router>
                
                <Route exact path={path}>
                    <Home />
                </Route>
                
                <Route path={`${path}/:classId`}>
                    <MyClass />
                </Route>

            </Router>
        </div>
    );

}