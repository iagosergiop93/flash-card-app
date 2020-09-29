import React from 'react';
import './SideMenu.css';

export class SideMenu extends React.Component {
    render() {
        return (
            <div className="SideMenu">
                <header className="SideMenu-header">Side Menu Header</header>
                <section className="SideMenu-main">Menu elements</section>
                <footer className="SideMenu-footer">Footer in Side Menu</footer>
            </div>
        );
    }
}