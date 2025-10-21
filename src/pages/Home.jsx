import React from 'react';
import TaskManager from '../components/TaskManager';

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to PLP Task Manager</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your tasks efficiently with our easy-to-use task manager. 
          Add, complete, and organize your daily tasks all in one place.
        </p>
      </div>
      
      <TaskManager />
    </div>
  );
};

export default Home;