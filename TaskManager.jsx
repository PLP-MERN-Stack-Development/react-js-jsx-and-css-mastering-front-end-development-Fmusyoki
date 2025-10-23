import React, { useState } from 'react';

const SimpleTaskManager = () => {
  // 1. State for the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // 2. State for the input field value
  const [newTask, setNewTask] = useState('');

  // Function to add a new task
  const addTask = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    
    if (newTask.trim() === '') return; // Don't add empty tasks

    const taskObject = {
      id: Date.now(), // Unique ID
      text: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, taskObject]); // Add the new task to the array
    setNewTask(''); // Clear the input field
  };

  // Function to toggle the completed status
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Basic Task List</h2>
      
      {/* --- Task Input Form --- */}
      <form onSubmit={addTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          Add
        </button>
      </form>
      
      {/* --- Task List --- */}
      <ul className="space-y-3">
        {tasks.map(task => (
          <li 
            key={task.id} 
            className="flex items-center justify-between p-3 border border-gray-200 rounded-md"
          >
            {/* Task Text */}
            <span 
              className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
            
            {/* Delete Button */}
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 text-red-500 hover:text-red-700 font-semibold transition"
              aria-label="Delete task"
            >
              &times; {/* Simple times symbol for delete */}
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-center text-gray-400 mt-4">Your task list is empty!</p>
      )}
    </div>
  );
};

export default SimpleTaskManager;