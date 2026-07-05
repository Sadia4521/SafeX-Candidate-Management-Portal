export default function Filters({
  role,
  setRole,
  status,
  setStatus,
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4">

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border rounded-lg p-3 bg-white"
      >
        <option>All</option>
        <option>Frontend</option>
        <option>Backend</option>
        <option>UI/UX</option>
        <option>Flutter</option>
        <option>AI</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded-lg p-3 bg-white"
      >
        <option>All</option>
        <option>Active</option>
        <option>Pending</option>
        <option>Interviewed</option>
        <option>Rejected</option>
      </select>

    </div>
  );
}