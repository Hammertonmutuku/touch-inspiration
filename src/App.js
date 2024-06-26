import './App.css';
import React from 'react';
import UserList from './Components/components';
import UserDetail from './Components/userDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

       <Router>
        <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
         

        </Router>
    
    </div>
    
  );
}

export default App;
