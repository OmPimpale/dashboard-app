import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { removeWidget } from "../store/slice";
import type { IWidget } from "../interface/interface";
import { X } from "lucide-react";

export default function WidgetCard({
  widget,
  categoryId,
}: {
  widget: IWidget;
  categoryId: string;
}) {
  const dispatch = useDispatch();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98, y: 10 }}
      transition={{ duration: 0.2 }}
      className="p-4 rounded border border-gray-300 shadow-sm relative bg-gray-50"
    >
      <button
        onClick={() =>
          dispatch(removeWidget({ categoryId, widgetId: widget.id }))
        }
        className="absolute top-2 right-2 text-gray-900 hover:text-red-500 cursor-pointer"
        title="Remove"
      >
        <X size={14} />
      </button>

      <h4 className="font-semibold mb-2 text-gray-700 text-md">
        {widget.title}
      </h4>
      <p className="text-xs text-slate-500">{widget.text}</p>
    </motion.div>
  );
}
