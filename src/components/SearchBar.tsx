import SearchIcon from "@/icons/searchIcon";
import { useData } from "@/context/dataContext";

export default function SearchBar() {
  const { search, setSearch } = useData();
  return (
    <div className="flex gap-3">
      <input
        className="w-35 h-10 border sm:w-40 border-blue-500 bg-white mt-2 rounded-xl"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />{" "}
      <SearchIcon />
    </div>
  );
}
