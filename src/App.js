import './App.css';
import React from 'react';
import UserList from './Components/components';
import UserDetail from './Components/userDetails';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
          <Route path="/" exact component={UserList} />
          <Route path="/user/:id" component={UserDetail} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
