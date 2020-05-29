import React from 'react';
import News from './news/News';
import Main from './main/Main';
import Login from './login/Login';
import Profile from './profile/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/news">Новости</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/login" render={({history}) => <Login history={history} />} />
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
