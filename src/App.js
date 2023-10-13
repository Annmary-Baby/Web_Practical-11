import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css"

const App = () => {
    const [tasks, setTasks] = useState([]);
  
    const handleSaveTask = (newTask) => {
      setTasks([...tasks, newTask]);
    };
  
    const handleEditTask = (taskId) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, name: prompt('Edit task:', task.name) } : task
      );
      setTasks(updatedTasks);
    };
  
    const handleDeleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <TaskForm onSave={handleSaveTask} />
        <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      </div>
    );
  };
  
  // Render the app
  export default App;