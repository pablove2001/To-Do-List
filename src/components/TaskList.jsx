import Task from "./Task";

function TaskList({ tasks, setTask, deleteTask }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll lg:overflow-y-scroll">
      {tasks && tasks.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Task List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            View and manage {""}
            <span className="text-amber-600 font-bold">your tasks</span>
          </p>

          <div>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                setTask={setTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There are no tasks
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding tasks and {""}
            <span className="text-amber-600 font-bold">
              they will appear here
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default TaskList;
