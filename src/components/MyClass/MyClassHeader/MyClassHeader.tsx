import React from 'react';
import './MyClassHeader.css';

export class MyClassHeader extends React.Component {
    render() {
        return (
            <header className="myclass-header">
                <div className="myclass-img-div">
                    <img src={process.env.PUBLIC_URL + '/assets/computer.jpg'} className="myclass-img" />
                </div>
                
                <div className="myclass-main">
                    <h1>Software Development</h1>
                    <div>
                        <span className="myclass-creator">Creator: Iago Pereira</span>
                        <span></span>
                    </div>
                    <div className="icons-block">

                    </div>
                </div>

                <div className="myclass-progress-block">

                </div>

            </header>
        );
    }
}