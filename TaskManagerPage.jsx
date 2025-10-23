import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SimpleTaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault(); 
    if (newTask.trim() === '') return; 

    const taskObject = {
      id: Date.now(), 
      text: newTask.trim(),
      completed: false,
    };

    setTasks([taskObject, ...tasks]);
    setNewTask(''); 
  };


  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-2xl rounded-xl mt-8 transition-colors duration-300">
        <Navbar />
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white text-center">
        To do List
      </h2>
      
      <form onSubmit={addTask} className="flex gap-3 mb-8">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What's your next task?"
          className="flex-grow p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
        <button 
          type="submit" 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Add Task
        </button>
      </form>
      
      {/* --- Task List --- */}
      <ul className="space-y-4">
        {tasks.map(task => (
          <li 
            key={task.id} 
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Task Text & Toggle Area */}
            <span 
              className={`flex-grow cursor-pointer text-lg ${task.completed ? 'line-through text-gray-500 dark:text-gray-500' : 'text-gray-900 dark:text-gray-100'}`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
            
            {/* Action Button */}
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 p-2 text-red-500 bg-red-100 dark:bg-red-900/50 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition"
              aria-label="Delete task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-center text-gray-400 dark:text-gray-600 italic mt-6">
          Your task list is empty! Start by adding a task above.
        </p>
      )}
      <Footer />
    </div>
  );
};

export default SimpleTaskManager;