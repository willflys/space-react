import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import SpaceButton from "../components/SpaceButton";
import { playTone } from "../components/SoundFX";

export default function Page1Opening({ next }) {
  return (
    <PageShell className="page-opening">
      <div className="opening-orbit orbit-red" />
      <div className="opening-orbit orbit-green">
        <img src="/assets/planet-green.png" alt="" />
      </div>
      <motion.div className="ufo" animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }} transition={{ duration: 4, repeat: Infinity }}>
        <div className="ufo-dome" />
        <div className="ufo-body" />
      </motion.div>
      <motion.div className="comet" animate={{ x: [-25, 20], y: [20, -20] }} transition={{ duration: 2.7, repeat: Infinity, repeatType: "reverse" }} />
      <img className="opening-blue-planet" src="/assets/planet.png" alt="" />
      <div className="opening-copy">
        <motion.h1 animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }}>
          someone sent<br />you a message...
        </motion.h1>
        <SpaceButton onClick={() => { playTone("open"); next(); }}>Open</SpaceButton>
      </div>
    </PageShell>
  );
}