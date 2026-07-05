import ProgressBar from "./ProgressBar";

export default function TaskCard({ task }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          {task.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold
          ${
            task.status === "Completed"
              ? "bg-green-100 text-green-700"
              : task.status === "In Progress"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {task.status}
        </span>

      </div>

      <p className="mt-4 text-gray-600">
        📅 {task.week}
      </p>

      <p className="text-gray-600">
        👨‍💼 {task.assignedBy}
      </p>

      <p className="text-gray-600">
        ⏰ Due: {task.dueDate}
      </p>

      <ProgressBar progress={task.progress} />

    </div>
  );
}