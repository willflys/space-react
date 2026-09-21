import { motion } from "framer-motion";
import PageShell from "../components/PageShell";

export default function Page7Ending() {
  return (
    <PageShell className="page-ending">
      <div className="ending-stars">✦</div>
      <motion.div className="ending-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>semoga menikmati<br />perjalanan-nya</h1>
        <p>*jgn lupa bintang 5</p>
      </motion.div>
    </PageShell>
  );
}