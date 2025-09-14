import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setSearchQuery } from "../store/slice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((s: RootState) => s.dashboard.searchQuery);

  return (
    <div className="w-full">
      <input
        value={query}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        placeholder="Search widgets..."
        className="w-full border rounded px-3 py-2 bg-white border-gray-300 placeholder:text-gray-400"
      />
    </div>
  );
}
