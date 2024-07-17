import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/Account/Login';
import './App.css'
import './styles/sb-admin-2.min.css'
import { Admin } from './pages/Admin/Admin';


function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route path="/login" element={<Admin />} />
          <Route path="/" element={<PrivateRoute />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
