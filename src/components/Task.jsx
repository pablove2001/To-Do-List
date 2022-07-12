const Task = ({ task, setTask, deleteTask }) => {
  const { nameTask, username, email, date, description, id } = task;

  const handleEliminar = () => {
    const answer = confirm("Do you want to delete the task?");

    if (answer) {
      deleteTask(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Task: {""}
        <span className="font-normal normal-case">{nameTask}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Username: {""}
        <span className="font-normal normal-case">{username}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date of delivery: {""}
        <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Description: {""}
        <span className="font-normal normal-case">{description}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold uppercase rounded-lg shadow-md shadow-slate-400"
          onClick={() => setTask(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold uppercase rounded-lg shadow-md shadow-slate-400"
          onClick={handleEliminar}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
