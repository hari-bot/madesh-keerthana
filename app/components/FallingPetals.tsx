/*
 * A subtle, decorative layer of pink petals drifting down behind the content.
 * Pure CSS (no image asset): each petal is a small span with three rounded
 * corners + one sharp corner, animated by the `petal-fall` keyframe defined in
 * tailwind.config.ts. Values come from a fixed seed array (not Math.random) so
 * server and client render identical markup — no Remix hydration mismatch.
 */

const PINK_SHADES = ["#CE7BB0", "#E9B7D2", "#F3D6E6"];

interface Petal {
  left: number; // %
  size: number; // px
  duration: number; // s
  delay: number; // s
  drift: number; // px horizontal sway
  color: string;
}

// 12 hand-picked "random-looking" petals (subtle density).
const PETALS: Petal[] = [
  { left: 4, size: 14, duration: 13, delay: 0, drift: 50, color: PINK_SHADES[0] },
  { left: 12, size: 11, duration: 16, delay: 4, drift: -40, color: PINK_SHADES[1] },
  { left: 22, size: 17, duration: 11, delay: 8, drift: 60, color: PINK_SHADES[2] },
  { left: 31, size: 12, duration: 15, delay: 2, drift: -55, color: PINK_SHADES[0] },
  { left: 41, size: 15, duration: 12, delay: 6, drift: 45, color: PINK_SHADES[1] },
  { left: 50, size: 10, duration: 14, delay: 9, drift: -35, color: PINK_SHADES[2] },
  { left: 59, size: 16, duration: 10, delay: 1, drift: 55, color: PINK_SHADES[0] },
  { left: 68, size: 12, duration: 16, delay: 5, drift: -50, color: PINK_SHADES[1] },
  { left: 77, size: 14, duration: 13, delay: 7, drift: 40, color: PINK_SHADES[2] },
  { left: 85, size: 11, duration: 15, delay: 3, drift: -60, color: PINK_SHADES[0] },
  { left: 92, size: 17, duration: 12, delay: 10, drift: 50, color: PINK_SHADES[1] },
  { left: 97, size: 13, duration: 14, delay: 6, drift: -45, color: PINK_SHADES[2] },
];

const FallingPetals = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden motion-reduce:hidden"
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="animate-petal-fall absolute top-0 block opacity-70"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: "0 100% 0 100%",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // consumed by the petalFall keyframe for horizontal sway
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingPetals;
