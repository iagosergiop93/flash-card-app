import React from 'react';
import { useParams } from 'react-router-dom';
import './MyClass.css';
import { MyClassHeader } from './MyClassHeader/MyClassHeader';

export function MyClass() {
    
    let classId = useParams<number>();
    console.log(classId);
    

    return (
        <div className="MyClass">
            <MyClassHeader/>
        </div>
    );
}