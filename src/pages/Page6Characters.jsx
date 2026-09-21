import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import { characterCaptions } from "../data/affirmations";

const characters = [
  { src: "/assets/character-1.png", caption: characterCaptions[0], x: 10, y: 16, delay: 0 },
  { src: "/assets/character-2.png", caption: characterCaptions[1], x: 52, y: 7, delay: 0.5 },
  { src: "/assets/character-3.png", caption: characterCaptions[2], x: 48, y: 33, delay: 1 },
  { src: "/assets/character-4.png", caption: characterCaptions[3], x: 8, y: 47, delay: 1.4 },
  { src: "/assets/character-5.png", caption: characterCaptions[4], x: 45, y: 66, delay: 1.8 },
];

export default function Page6Characters({ next }) {
  return (
    <PageShell className="page-characters" denseStars>
      <div className="space-ribbon" />
      {characters.map((item, i) => (
        <motion.div
          key={item.src}
          className="character-item"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: item.delay },
            scale: { duration: 0.6, delay: item.delay, type: "spring" },
            y: { duration: 3.2 + i * 0.25, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
          }}
          onClick={i === characters.length - 1 ? next : undefined}
        >
          <span>{item.caption}</span>
          <img src={item.src} alt="" />
        </motion.div>
      ))}
      <div className="character-hint">tap the last one ✦</div>
    </PageShell>
  );
}