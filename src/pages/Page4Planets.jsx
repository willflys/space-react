import { AnimatePresence, motion } from "framer-motion";
import PageShell from "../components/PageShell";
import { affirmations } from "../data/affirmations";
import { playTone } from "../components/SoundFX";
import { useEffect, useMemo, useState } from "react";

export default function Page4Planets({ next }) {
  const planets = useMemo(() => Array.from({ length: 12 }, (_, i) => ({ id: i, green: i === 7 })), []);
  const [tapped, setTapped] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (tapped.length === planets.length) {
      const timer = setTimeout(next, 1100);
      return () => clearTimeout(timer);
    }
  }, [tapped, planets.length, next]);

  const tapPlanet = (id) => {
    if (tapped.includes(id)) return;
    playTone("pop");
    setTapped((prev) => [...prev, id]);
    setMessage({ id, text: affirmations[id % affirmations.length] });
    setTimeout(() => setMessage((m) => (m?.id === id ? null : m)), 900);
  };

  return (
    <PageShell className="page-planets" denseStars>
      <h2 className="game-title">tap the planets!</h2>
      <div className="planet-grid">
        {planets.map((planet) => {
          const gone = tapped.includes(planet.id);
          return (
            <motion.button
              key={planet.id}
              className="planet-target"
              onClick={() => tapPlanet(planet.id)}
              initial={{ scale: 0 }}
              animate={gone ? { scale: 0, rotate: 180, opacity: 0 } : { scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: gone ? 0.42 : 0.35, delay: gone ? 0 : planet.id * 0.025, type: gone ? "tween" : "spring" }}
              aria-label={`planet ${planet.id + 1}`}
            >
              <img src={planet.green ? "/assets/planet-green.png" : "/assets/planet.png"} alt="" />
              {gone && <span className="planet-burst">✦</span>}
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {message && (
          <motion.div
            className="affirmation"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -18, scale: 1 }}
            exit={{ opacity: 0, y: -40 }}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>
      {tapped.length < planets.length && <div className="progress">{tapped.length}/{planets.length}</div>}
    </PageShell>
  );
}