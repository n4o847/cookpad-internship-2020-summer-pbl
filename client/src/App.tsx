import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import User from './pages/User';
import * as api from './api';
import Recipe from './pages/Recipe';

function App() {
  useEffect(() => {
    (async () => {
      await api.getHello();
    })();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/users/:id" component={User} />
        <Route path="/recipes/:id" component={Recipe} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
