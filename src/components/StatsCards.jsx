import candidates from "../data/candidates";

export default function StatsCards() {
  const total = candidates.length;

  const active = candidates.filter(
    (item) => item.status === "Active"
  ).length;

  const pending = candidates.filter(
    (item) => item.status === "Pending"
  ).length;

  const interviewed = candidates.filter(
    (item) => item.status === "Interviewed"
  ).length;

  const cardStyle =
    "bg-white rounded-xl shadow p-6";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <div className={cardStyle}>
        <h3 className="text-gray-500">
          Total Candidates
        </h3>

        <h1 className="text-4xl font-bold mt-2">
          {total}
        </h1>
      </div>

      <div className={cardStyle}>
        <h3 className="text-gray-500">
          Active
        </h3>

        <h1 className="text-4xl font-bold text-green-600 mt-2">
          {active}
        </h1>
      </div>

      <div className={cardStyle}>
        <h3 className="text-gray-500">
          Pending
        </h3>

        <h1 className="text-4xl font-bold text-yellow-500 mt-2">
          {pending}
        </h1>
      </div>

      <div className={cardStyle}>
        <h3 className="text-gray-500">
          Interviewed
        </h3>

        <h1 className="text-4xl font-bold text-blue-600 mt-2">
          {interviewed}
        </h1>
      </div>

    </div>
  );
}