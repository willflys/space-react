import { motion } from "framer-motion";

export default function SpaceButton({ children, onClick, disabled = false, className = "" }) {
  return (
    <motion.button
      type="button"
      className={`space-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
    >
      {children}
    </motion.button>
  );
}