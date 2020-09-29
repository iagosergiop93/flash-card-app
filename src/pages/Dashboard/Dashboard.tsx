import React from 'react';
import './Dashboard.css';
import { MyClass } from '../../components/MyClass/MyClass';
import { SideMenu } from '../../components/SideMenu/SideMenu';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard">
                <SideMenu />
                <MyClass />
            </div>
        );
    }
}