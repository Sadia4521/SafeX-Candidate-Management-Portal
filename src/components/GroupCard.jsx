import ProgressBar from "./ProgressBar";

export default function GroupCard({ group }) {

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

      <h2 className="text-2xl font-bold">

        {group.groupName}

      </h2>

      <p className="mt-3 text-gray-600">

        Leader

      </p>

      <h3 className="font-semibold text-lg">

        👨‍💼 {group.leader}

      </h3>

      <ProgressBar
        progress={group.progress}
      />

      <div className="mt-6">

        <h4 className="font-semibold mb-3">

          Members

        </h4>

        <div className="flex flex-wrap gap-2">

          {group.members.map((member) => (

            <span
              key={member}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
            >

              {member}

            </span>

          ))}

        </div>

      </div>

    </div>

  );
}