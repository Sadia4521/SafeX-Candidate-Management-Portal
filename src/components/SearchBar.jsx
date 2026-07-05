export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <input
      type="text"
      placeholder="Search Candidate..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full bg-white rounded-lg border p-4 outline-none focus:ring-2 focus:ring-blue-600"
    />
  );
}