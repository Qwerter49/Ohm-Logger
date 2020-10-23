import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login" render={(props) => <Login {...props} />} />
        <PrivateRoute path="/"/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
