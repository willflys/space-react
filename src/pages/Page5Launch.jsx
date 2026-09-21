import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import SpaceButton from "../components/SpaceButton";
import { playTone } from "../components/SoundFX";
import { useState } from "react";

export default function Page5Launch({ next }) {
  const [launching, setLaunching] = useState(false);

  const launch = () => {
    if (launching) return;
    setLaunching(true);
    playTone("launch");
    setTimeout(next, 1550);
  };

  return (
    <PageShell className={`page-launch ${launching ? "is-launching" : ""}`} denseStars>
      <div className="ring-planet">
        <div className="saturn" />
        <div className="saturn-ring" />
      </div>
      <motion.div
        className="rocket"
        animate={launching ? { x: 40, y: -620, rotate: -10, scale: 1.12 } : { y: [0, -12, 0], rotate: [-3, 2, -3] }}
        transition={launching ? { duration: 1.35, ease: [0.25, 0.8, 0.1, 1] } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rocket-window" />
        <div className="rocket-body" />
        <div className="rocket-fin left" />
        <div className="rocket-fin right" />
        <div className="rocket-flame" />
      </motion.div>
      <div className="cloud-wrap"><img src="/assets/cloud.png" alt="" /></div>
      <SpaceButton onClick={launch} disabled={launching}>{launching ? "launching..." : "launch"}</SpaceButton>
    </PageShell>
  );
}