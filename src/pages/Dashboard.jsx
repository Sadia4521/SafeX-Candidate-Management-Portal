import { useState } from "react";

import StatsCards from "../components/StatsCards";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import CandidateTable from "../components/CandidateTable";

import candidates from "../data/candidates";

export default function Dashboard() {

  const [search, setSearch] = useState("");

  const [role, setRole] = useState("All");

  const [status, setStatus] = useState("All");

  const filteredCandidates = candidates.filter((candidate) => {

    const matchSearch =
      candidate.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchRole =
      role === "All"
        ? true
        : candidate.role === role;

    const matchStatus =
      status === "All"
        ? true
        : candidate.status === status;

    return (
      matchSearch &&
      matchRole &&
      matchStatus
    );

  });

  return (

    <div className="space-y-8">

      <StatsCards />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filters
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
      />

      <CandidateTable
        candidates={filteredCandidates}
      />

    </div>

  );

}