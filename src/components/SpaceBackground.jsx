import { useMemo } from "react";
import { motion } from "framer-motion";

export default function SpaceBackground({ dense = false }) {
  const stars = useMemo(() => {
    const count = dense ? 64 : 40;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 37.7) % 100}%`,
      top: `${(i * 61.3) % 100}%`,
      size: 1 + ((i * 17) % 4),
      delay: (i % 9) * 0.35,
      duration: 2.5 + (i % 5),
    }));
  }, [dense]);

  return (
    <div className="space-bg" aria-hidden="true">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="star"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
          animate={{ opacity: [0.2, 0.9, 0.25], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}