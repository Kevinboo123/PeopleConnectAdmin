import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import UsersManagement from './pages/UsersManagement';
import Services from './pages/Services';
import PostManagement from './pages/PostManagement';
import Sidebar from './components/Sidebar';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPage < 2) {
        setCurrentPage(currentPage + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderSequentialPages = () => {
    if (currentPage === 0) {
      return <LandingPage />;
    } else if (currentPage === 1) {
      return <LoginPage />;
    } else {
      return (
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 overflow-auto">
            <Dashboard />
          </div>
        </div>
      );
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={renderSequentialPages()} />
        <Route path="/categories" element={
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              <Categories />
            </div>
          </div>
        } />
        <Route path="/services" element={
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              <Services />
            </div>
          </div>
        } />
        <Route path="/posts" element={
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              <PostManagement />
            </div>
          </div>
        } />
        {/* Add other routes as needed */}
        <Route path="/users" element={
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              <UsersManagement />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
