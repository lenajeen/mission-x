import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login.js';

//import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage.js';

function App() {
  return (
//     <div className="App">
//       <Homepage />
//     </div>
//   );
// }

<Router>
  <Switch>
    <Route path="/login" exact component={Login}/>
    <Route exact path="/">
      <Homepage />
      </Route>
      </Switch>
    </Router>
  )
}

export default App;
