import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Login } from './pages/Login/Login';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header title="Flash-Cards"/>
      <Router>
        
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/dashboard" 
          render={props => (
            <Dashboard />
          )}>
        </Route>

      </Router>
    </div>
  );
}

export default App;
