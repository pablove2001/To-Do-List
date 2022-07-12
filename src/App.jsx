import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            tasks={tasks}
            setTasks={setTasks}
            task={task}
            setTask={setTask}
          />
          <TaskList tasks={tasks} setTask={setTask} deleteTask={deleteTask} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
