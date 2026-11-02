/** Deterministic pseudo-random shuffle (mulberry32) so any seed replays identically. */
export function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const out = [...items];
  let t = seed >>> 0;

  const rand = () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };

  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }

  return out;
}

/** UTC date as a number, so server and client always agree on "today". */
export function dailySeed(): number {
  const now = new Date();
  return (
    now.getUTCFullYear() * 10000 +
    (now.getUTCMonth() + 1) * 100 +
    now.getUTCDate()
  );
}
