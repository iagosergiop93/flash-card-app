import React from 'react';
import './MyClass.css';
import { MyClassHeader } from './MyClassHeader/MyClassHeader';
import { MyClassMain } from './MyClassMain/MyClassMain';

export class MyClass extends React.Component {
    render() {
        return (
            <div className="MyClass">
                <MyClassHeader/>
                <MyClassMain/>
            </div>
        );
    }
}