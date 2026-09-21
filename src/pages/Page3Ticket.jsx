import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import SpaceButton from "../components/SpaceButton";
import { playTone } from "../components/SoundFX";

export default function Page3Ticket({ next }) {
  return (
    <PageShell className="page-ticket">
      <div className="ticket-sparkle sparkle-a">✦</div>
      <motion.div className="ticket" initial={{ y: 30, rotate: -5 }} animate={{ y: [0, -6, 0], rotate: [-2, 1, -2] }} transition={{ duration: 4, repeat: Infinity }}>
        <div className="ticket-notch n1" />
        <div className="ticket-notch n2" />
        <div className="ticket-logo">NASA</div>
        <div className="ticket-meta">
          <strong>NASA - 2139131</strong>
          <span>capt: w</span>
        </div>
        <div className="ticket-data">
          <div>passengers : jesika</div>
          <div>NIK : 83210983218-0321-31</div>
          <div>birth date : ??/??/04</div>
          <div>site : madura</div>
          <div>hobby : nonton</div>
        </div>
        <div className="barcode" />
      </motion.div>
      <SpaceButton onClick={() => { playTone("next"); next(); }}>flight</SpaceButton>
    </PageShell>
  );
}