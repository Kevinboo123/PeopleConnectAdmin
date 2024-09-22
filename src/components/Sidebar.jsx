import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiGrid, FiFileText, FiSettings, FiUser, FiHeart } from 'react-icons/fi';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-purple-700 text-white p-6 h-screen">
      <img src="/src/assets/project_logo.png" alt="Project Logo" className="w-12 h-12 mb-8" />
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className={`flex items-center space-x-3 p-3 rounded-lg ${location.pathname === '/' ? 'bg-purple-700' : 'hover:bg-purple-700'}`}>
              <FiGrid size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/categories" className={`flex items-center space-x-3 p-3 rounded-lg ${location.pathname === '/categories' ? 'bg-purple-700' : 'hover:bg-purple-700'}`}>
              <FiFileText size={20} />
              <span>Categories Management</span>
            </Link>
          </li>
          <li>
            <Link to="/services" className={`flex items-center space-x-3 p-3 rounded-lg ${location.pathname === '/services' ? 'bg-purple-700' : 'hover:bg-purple-700'}`}>
              <FiSettings size={20} />
              <span>Service Management</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className={`flex items-center space-x-3 p-3 rounded-lg ${location.pathname === '/users' ? 'bg-purple-700' : 'hover:bg-purple-700'}`}>
              <FiUser size={20} />
              <span>User Management</span>
            </Link>
          </li>
          <li>
            <Link to="/posts" className={`flex items-center space-x-3 p-3 rounded-lg ${location.pathname === '/posts' ? 'bg-purple-700' : 'hover:bg-purple-700'}`}>
              <FiHeart size={20} />
              <span>Post Management</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
