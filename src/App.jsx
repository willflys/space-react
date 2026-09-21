import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Page1Opening from "./pages/Page1Opening";
import Page2Message from "./pages/Page2Message";
import Page3Ticket from "./pages/Page3Ticket";
import Page4Planets from "./pages/Page4Planets";
import Page5Launch from "./pages/Page5Launch";
import Page6Characters from "./pages/Page6Characters";
import Page7Ending from "./pages/Page7Ending";

export default function App() {
  const [page, setPage] = useState(1);
  const next = () => setPage((p) => Math.min(p + 1, 7));

  const pages = {
    1: <Page1Opening next={next} />,
    2: <Page2Message next={next} />,
    3: <Page3Ticket next={next} />,
    4: <Page4Planets next={next} />,
    5: <Page5Launch next={next} />,
    6: <Page6Characters next={next} />,
    7: <Page7Ending />,
  };

  return <AnimatePresence mode="wait">{pages[page]}</AnimatePresence>;
}