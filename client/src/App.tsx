import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import User from './pages/User';

function App() {
  useEffect(() => {
    (async () => {
      console.log('Fetching /api/hello');
      const response = await fetch('//localhost:3001/api/hello');
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/users/:id" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
