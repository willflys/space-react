export function playTone(type = "tap") {
  // No audio files are required for the first build.
  // Web Audio creates tiny UI sounds after user interaction.
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const settings = {
    tap: [520, 0.045, "sine"],
    open: [280, 0.12, "triangle"],
    pop: [720, 0.08, "sine"],
    next: [620, 0.07, "triangle"],
    launch: [110, 0.5, "sawtooth"],
  }[type] || [520, 0.05, "sine"];
  osc.type = settings[2];
  osc.frequency.setValueAtTime(settings[0], ctx.currentTime);
  if (type === "launch") {
    osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + settings[1]);
  }
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + settings[1]);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + settings[1] + 0.02);
}