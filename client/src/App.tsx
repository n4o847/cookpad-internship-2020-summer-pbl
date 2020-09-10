import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import User from './pages/User';
import Recipe from './pages/Recipe';
import Tag from './pages/Tag';
import * as api from './api';

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
        <Route path="/tags/:id" component={Tag} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
