import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function Hats() {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/hats'} component={Hats} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
