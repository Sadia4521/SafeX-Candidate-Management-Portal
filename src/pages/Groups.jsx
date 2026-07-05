import groups from "../data/groups";
import GroupCard from "../components/GroupCard";

export default function Groups() {

  return (

    <div className="space-y-6">

      <h1 className="text-3xl font-bold">

        Group & Leader View

      </h1>

      <div className="grid lg:grid-cols-2 gap-6">

        {groups.map((group) => (

          <GroupCard
            key={group.id}
            group={group}
          />

        ))}

      </div>

    </div>

  );
}