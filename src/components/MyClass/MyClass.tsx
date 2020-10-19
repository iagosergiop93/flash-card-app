import React from 'react';
import { useParams } from 'react-router-dom';
import './MyClass.css';
import { MyClassHeader } from './MyClassHeader/MyClassHeader';
import { MyClassMain } from './MyClassMain/MyClassMain';

export function MyClass() {
    
    let classId = useParams<number>();
    console.log(classId);
    

    return (
        <div className="MyClass">
            <MyClassHeader/>
            <MyClassMain/>
        </div>
    );
}