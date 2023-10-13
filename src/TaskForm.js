import { useState } from "react";

// TaskForm component
const TaskForm = ({ onSave }) => {
    const [taskName, setTaskName] = useState('');
  
    const handleSave = () => {
      if (taskName.trim() === '') {
        alert('Task name cannot be empty!');
        return;
      }
  
      onSave({ name: taskName, id: Date.now() });
  
      // Reset the form
      setTaskName('');
    };
  
    return (
      <div>
        <h2>Add New Task</h2>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    );
  };

  export default TaskForm;