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
import Tags from './pages/Tags';
import Tag from './pages/Tag';
import Header from './components/Header';
import * as api from './api';

function App() {
  useEffect(() => {
    (async () => {
      await api.getHello();
    })();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/users/:id" component={User} />
        <Route path="/recipes/:id" component={Recipe} />
        <Route path="/tags/:id" component={Tag} />
        <Route path="/tags" component={Tags} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
