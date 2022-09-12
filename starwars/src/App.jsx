import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';
import AuthContext from './context/auth';

function App() {
  return (
    <Router>
      <AuthContext.Provider value={{signed: true}}>
        <Routes />
      </AuthContext.Provider>
    </Router>
  )
}

export default App;
