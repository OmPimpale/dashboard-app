import Button from "../componet/Button";
import { motion } from "framer-motion";

export default function HomePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // delay between children
      },
    },
  };

  return (
    <div className="bg-blue-50 min-h-screen text-center flex flex-col items-center justify-center space-y-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 1 * 2 }}
          className="text-black text-5xl font-bold font-sans"
        >
          Welcome to Your Dashboard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 2 * 2 }}
          className="text-gray-600 text-xl mt-8 mb-8"
        >
          "Track insights, manage tasks, and stay productive — all in one
          place.”
        </motion.p>
        <Button text="Dashboard" index={3} path="/dashboard" />
      </motion.div>
    </div>
  );
}

// Background → #F9FAFB(very light gray, Tailwind gray - 50)
// Heading(h1, h2) → #111827(almost black, Tailwind gray - 900)
// Subheading(h3, h4) → #374151(dark gray, Tailwind gray - 700)
// Text(body, paragraphs) → #4B5563(medium gray, Tailwind gray - 600)
