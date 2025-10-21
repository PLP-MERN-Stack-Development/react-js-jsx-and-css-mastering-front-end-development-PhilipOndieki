import React from 'react';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a React application built as part of the PLP MERN Stack program, 
          demonstrating modern front-end development practices.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">⚛️</span>
            <span>React.js - UI Library</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">⚡</span>
            <span>Vite - Build Tool</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">🎨</span>
            <span>Tailwind CSS - Styling</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">🛣️</span>
            <span>React Router - Navigation</span>
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Task Management</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Add, complete, and delete tasks with localStorage persistence
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">API Integration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fetch and display data from external APIs
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Dark Mode</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Toggle between light and dark themes
            </p>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Works seamlessly on mobile, tablet, and desktop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;