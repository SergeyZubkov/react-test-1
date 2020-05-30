import React from 'react';
import News from './news/News';
import Main from './main/Main';
import Login from './login/Login';
import Profile from './profile/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <Router>
        <div>
          <nav>
            <ul className={s.navigation}>
              <li>
                <NavLink exact to="/" activeClassName={s.active}>Главная</NavLink>
              </li>
              <li>
                <NavLink to="/news" activeClassName={s.active}>Новости</NavLink>
              </li>
              <li>
                <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
              </li>
            </ul>
          </nav>

          <div className={s.content_container}>
            <Switch>
              <PrivateRoute path="/news">
                <News />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/profile">
                <Profile />
              </PrivateRoute>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
