import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PeopleList from "./components/PeopleList";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <PeopleList />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
