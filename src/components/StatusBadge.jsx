export default function StatusBadge({ status }) {
  let color = "";

  switch (status) {
    case "Active":
      color = "bg-green-100 text-green-700";
      break;

    case "Pending":
      color = "bg-yellow-100 text-yellow-700";
      break;

    case "Interviewed":
      color = "bg-blue-100 text-blue-700";
      break;

    case "Rejected":
      color = "bg-red-100 text-red-700";
      break;

    default:
      color = "bg-gray-100 text-gray-700";
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}
    >
      {status}
    </span>
  );
}