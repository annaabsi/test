import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import PeopleList from "./components/PeopleList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <PeopleList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
