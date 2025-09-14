import { motion } from "framer-motion";
import type { IButton } from "../interface/interface.button";
import { useNavigate } from "react-router-dom";

export default function Button({
  text = "Get Started",
  varient = "primary",
  index = 1,
  path,
}: IButton) {
  const navigate = useNavigate();

  if (varient === "primary") {
    varient = "bg-blue-600 hover:bg-blue-700";
  } else if (varient === "secondary") {
    varient = "bg-gray-600 hover:bg-gray-700";
  } else {
    varient = "bg-green-600 hover:bg-green-700";
  }

  const handleClick = () => {
    path && navigate(path);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, staggerChildren: index * 2 }}
      whileHover={{ scale: 1.03 }}
      onClick={handleClick}
      className={`px-6 py-3 text-white rounded-lg hover:bg-blue-70 ${varient}`}
    >
      {text}
    </motion.button>
  );
}
