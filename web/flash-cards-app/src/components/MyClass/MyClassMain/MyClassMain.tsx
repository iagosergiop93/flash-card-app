import React from 'react';
import './MyClassMain.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { About } from './About/About';
import { Decks } from './Decks/Decks';
import { Learners } from './Learners/Learners';

export class MyClassMain extends React.Component {
    render() {
        const elements = [
            { name: 'About', link: '/about' },
            { name: 'Decks', link: '/decks' },
            { name: 'Learners', link: '/learners' },
        ]
        const links = [];

        for(const item of elements) {
            links.push(
                <div className="tabs">
                    <Link to={item.link}>{item.name}</Link>
                </div>
            );
        }

        return (
            <main className="MyClass-main">
                <Router>
                    <div className="tabs-container">
                        {links}
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <Decks />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/decks">
                            <Decks />
                        </Route>
                        <Route path="/learners">
                            <Learners />
                        </Route>
                    </Switch>
                </Router>
            </main>
        );
    }
}