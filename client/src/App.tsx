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

function App() {
  useEffect(() => {
    (async () => {
      const data = await api.getHello();
      console.log(data);
    })();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/users/:id" component={User} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
