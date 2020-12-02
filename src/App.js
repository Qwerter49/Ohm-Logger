import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {

  const [signedInUser, setSignedInUser] = useState("")

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login" render={(props) => <Login setSignedInUser={setSignedInUser} {...props} />} />
        <PrivateRoute signedInUser={signedInUser} path="/"/>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
