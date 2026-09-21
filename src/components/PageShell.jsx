import { motion } from "framer-motion";
import SpaceBackground from "./SpaceBackground";

export default function PageShell({ children, denseStars = false, className = "" }) {
  return (
    <motion.main
      className={`page ${className}`}
      initial={{ opacity: 0, scale: 1.035 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.965 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <SpaceBackground dense={denseStars} />
      {children}
    </motion.main>
  );
}