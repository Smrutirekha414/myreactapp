import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./component/Header";
import SideMenu from "./component/SideMenu";
import Main from "./component/Main";
import Footer from "./component/Footer";
import './App.css'


const App = () => {

  return(
    <Router>
      <div className="app-container">
     <Header /> 
     <div className="body-container">
     <SideMenu />
          <div className="main-wrapper">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/meetings" element={<Main />} />
            <Route path="/meals" element={<Main />} />
            <Route path="/faqs" element={<Main />} />
            <Route path="/announcements" element={<Main />} />
            <Route path="/contacts" element={<Main />} />
            <Route path="/audit_history" element={<Main />} />
          </Routes>
          </div>
     </div>
     <Footer />
    </div>
    </Router>
  );
};

export default App;