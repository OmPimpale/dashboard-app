import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { addCategory, toggleCategory } from "../store/slice";
import { motion } from "framer-motion";

export default function Sidebar() {
  const categories = useSelector((s: RootState) => s.dashboard.categories);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, scale:0.98 }}
      animate={{ opacity: 1, scale:1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 rounded shadow sticky top-20"
    >
      <form
        className="mb-2 border-b pb-4 border-gray-200"
        onSubmit={(e) => {
          e.preventDefault();
          if (name.trim()) {
            dispatch(addCategory({ name: name.trim() }));
            setName("");
          }
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New category name"
          className="w-full border border-gray-300 rounded mb-2 px-2 py-1.5 text-xs placeholder:text-gray-400"
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 rounded text-sm">
          Add Category
        </button>
      </form>

      <h2 className="font-semibold text-lg mb-2 text-center text-black">
        Categories
      </h2>

      <div className="space-y-2 max-h-[65vh] overflow-auto">
        {categories.map((c) => (
          <label
            key={c.id}
            className="flex items-center justify-between p-2 rounded hover:bg-blue-50 hover:cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={c.enabled}
                onChange={(e) =>
                  dispatch(
                    toggleCategory({
                      categoryId: c.id,
                      enabled: e.target.checked,
                    })
                  )
                }
              />
              <span className="text-sm text-gray-700">{c.name}</span>
            </div>
          </label>
        ))}
      </div>
    </motion.div>
  );
}
