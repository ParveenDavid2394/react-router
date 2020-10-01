import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'

const User = ({match})=>{
    return(
        <h1>Welcome User {match.params.username}</h1>
    )
}

function App() {

  return (
    <Router>
        <div className="App">

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about/">About</Link>
                </li>
                <li>
                    <NavLink to="/user/john" exact activeStyle={{color:'green'}}>User John</NavLink>
                </li>
                  <li>
                      <NavLink to="/user/marco" exact activeStyle={{ color: 'green' }}>User Marco</NavLink>
                  </li>
            </ul>

            <Route path="/" exact strict render={ ()=> <h1>Welcome Home </h1>} />

            <Route path="/about/" exact strict render={() => <h1>Welcome About </h1>} />

            <Route path="/user/:username" exact strict component={User} />

        </div>
    </Router>
  );
}

export default App;
