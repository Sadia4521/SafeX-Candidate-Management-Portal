import StatusBadge from "./StatusBadge";

export default function CandidateTable({ candidates }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="text-left p-4">Name</th>

            <th className="text-left p-4">Email</th>

            <th className="text-left p-4">Role</th>

            <th className="text-left p-4">Experience</th>

            <th className="text-left p-4">Status</th>

          </tr>

        </thead>

        <tbody>

          {candidates.map((candidate) => (

            <tr
              key={candidate.id}
              className="border-t hover:bg-gray-50"
            >

              <td className="p-4 font-semibold">
                {candidate.name}
              </td>

              <td className="p-4">
                {candidate.email}
              </td>

              <td className="p-4">
                {candidate.role}
              </td>

              <td className="p-4">
                {candidate.experience}
              </td>

              <td className="p-4">
                <StatusBadge
                  status={candidate.status}
                />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}