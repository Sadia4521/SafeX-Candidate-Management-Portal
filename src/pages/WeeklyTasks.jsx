import tasks from "../data/tasks";
import TaskCard from "../components/TaskCard";

export default function WeeklyTasks() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Weekly Task Tracker
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}

      </div>

    </div>
  );
}