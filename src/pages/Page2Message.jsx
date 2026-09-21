import PageShell from "../components/PageShell";
import SpaceButton from "../components/SpaceButton";
import { playTone } from "../components/SoundFX";

export default function Page2Message({ next }) {
  return (
    <PageShell className="page-message" denseStars>
      <div className="constellation constellation-a" />
      <div className="constellation constellation-b" />
      <div className="sparkle sparkle-a">✦</div>
      <div className="sparkle sparkle-b">✦</div>
      <article className="message-card">
        <p>
          You made me smile last night :) i hope u doing well today, fy aku orangnya gengsi &amp;
          gbs bkin kata-kata kek km kemarin, thanks at all, km org baikk dan lucu, aku doain balik
          semua sama banyak hal baik yang datang ke hidup km, dan semoga segala rencana kehidupan
          setelahnya selalu dipermudahhhh, peganganku ajak kamu keluar angkasaaa
        </p>
        <span>ur capt : w</span>
      </article>
      <SpaceButton onClick={() => { playTone("next"); next(); }}>next</SpaceButton>
    </PageShell>
  );
}