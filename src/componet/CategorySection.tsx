import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ICategory } from "../interface/interface";
import WidgetCard from "./WidgetCard";
import AddWidgetModal from "./AddWidgetModal";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function CategorySection({ category }: { category: ICategory }) {
  const [open, setOpen] = useState(false);
  const searchQuery = useSelector((s: RootState) => s.dashboard.searchQuery);

  const filteredWidgets = category.widgets.filter(
    (w) =>
      w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasWidgets = category.widgets.length > 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-4 rounded shadow-sm hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-black">{category.name}</h3>
        <button
          onClick={() => setOpen(true)}
          className="text-sm bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded cursor-pointer transition-all duration-200"
        >
          + Add Widget
        </button>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {!hasWidgets ? (
            <motion.p
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-gray-500 col-span-full text-center"
            >
              No widgets, Try to add one.
            </motion.p>
          ) : filteredWidgets.length > 0 ? (
            filteredWidgets.map((w) => (
              <WidgetCard key={w.id} widget={w} categoryId={category.id} />
            ))
          ) : (
            <motion.p
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-gray-500 col-span-full text-center"
            >
              No widgets match your search
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {open && (
        <AddWidgetModal
          categoryId={category.id}
          onClose={() => setOpen(false)}
        />
      )}
    </motion.section>
  );
}
