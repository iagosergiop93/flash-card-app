import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Login } from './pages/Login/Login';
import { Header } from './components/Header/Header';
import { Signup } from './pages/Signup/Signup';
import { UserService } from './services/userService';

function App() {
  const userService = UserService.Factory();

  return (
    <div className="App">
      <Header title="Flash-Cards"/>
      <Router>
        
        <Route exact path="/signin">
          <Login userService={userService} />
        </Route>

        <Route exact path="/signup">
          <Signup userService={userService} />
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
