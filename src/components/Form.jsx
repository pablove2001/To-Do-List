import { useEffect, useState } from "react";
import Error from "./Error";

const Form = ({ tasks, setTasks, task, setTask }) => {
  const [nameTask, setNameTask] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(task).length > 0) {
      setNameTask(task.nameTask);
      setUsername(task.username);
      setEmail(task.email);
      setDate(task.date);
      setDescription(task.description);
    }
  }, [task]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Form Validation
    if ([nameTask, username, email, date, description].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const taskObject = {
      nameTask,
      username,
      email,
      date,
      description,
    };

    if (task.id) {
      taskObject.id = task.id;

      const updatedTasks = tasks.map((pacienteState) =>
        pacienteState.id === task.id ? taskObject : pacienteState
      );

      setTasks(updatedTasks);
      setTask({});
    } else {
      taskObject.id = generateId();
      setTasks([...tasks, taskObject]);
    }

    setNameTask("");
    setUsername("");
    setEmail("");
    setDate("");
    setDescription("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Write your tasks</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add tasks and {""}
        <span className="text-amber-600 font-bold">manage them</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>All fields are required</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="nameTask"
            className="block text-gray-700 uppercase font-bold"
          >
            Task
          </label>

          <input
            id="nameTask"
            type="text"
            placeholder="Name of the task"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nameTask}
            onChange={(e) => setNameTask(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="username"
            className="block text-gray-700 uppercase font-bold"
          >
            Username
          </label>

          <input
            id="username"
            type="text"
            placeholder="Your username"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Date of delivery
          </label>

          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-gray-700 uppercase font-bold"
          >
            Description
          </label>
          <textarea
            id="description"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 active:bg-amber-700 cursor-pointer transition-all rounded-lg shadow-md shadow-slate-400"
          value={task.id ? "Edit task" : "Add task"}
        />
      </form>
    </div>
  );
};

export default Form;
