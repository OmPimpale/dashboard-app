import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import SearchBar from "../componet/SearchBar";
import Sidebar from "../componet/Sidebar";
import CategorySection from "../componet/CategorySection";
import BreadCrumb from "../componet/BradCrumb";

export default function DashboardPage() {
  const categories = useSelector((s: RootState) => s.dashboard.categories);
  // const query = useSelector((s: RootState) => s.dashboard.searchQuery);

  // If there's searchQuery, you could render search results separately.
  const activeCategories = categories.filter((c) => c.enabled);

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="shadow-sm bg-blue-50 sticky top-0 z-10">
        <div className="max-w-6xl p-4 mx-auto flex flex-col items-start md:items-center md:grid grid-cols-5 gap-4 md:gap-2">
          <div className="col-span-2 md:col-span-1">
            <BreadCrumb />
          </div>
          <div className="flex-1 col-span-3 md:col-span-4 w-full">
            <SearchBar />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <Sidebar />
        </aside>

        <main className="md:col-span-3 space-y-6">
          {activeCategories.map((cat) => (
            <CategorySection key={cat.id} category={cat} />
          ))}

          {activeCategories.length === 0 && (
            <div className="p-8 bg-white rounded shadow text-center">
              No categories enabled — enable from sidebar
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
