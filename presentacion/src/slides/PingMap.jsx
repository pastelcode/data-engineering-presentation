function hexPoints(r, cx, cy) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
}

export const PINGS = [
  { x: 14, y: 24 },
  { x: 25, y: 58 },
  { x: 35, y: 32 },
  { x: 44, y: 71 },
  { x: 53, y: 21 },
  { x: 60, y: 46 },
  { x: 70, y: 25 },
  { x: 78, y: 63 },
  { x: 86, y: 37 },
  { x: 22, y: 81 },
  { x: 49, y: 85 },
  { x: 66, y: 77 },
  { x: 32, y: 45 },
  { x: 91, y: 73 },
  { x: 10, y: 50 },
  { x: 56, y: 9 },
  { x: 74, y: 12 },
  { x: 40, y: 60 },
  { x: 18, y: 38 },
  { x: 84, y: 52 },
];

export function MapBg() {
  return (
    <svg
      className="map-bg"
      viewBox="0 0 1000 440"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="1000" height="72" className="map-water" />
      <rect x="645" y="185" width="165" height="135" rx="10" className="map-park" />
      <rect x="40" y="300" width="120" height="90" rx="10" className="map-park" />
      {Array.from({ length: 21 }, (_, i) => (
        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="440" className="map-road" />
      ))}
      {Array.from({ length: 11 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 44} x2="1000" y2={i * 44} className="map-road" />
      ))}
    </svg>
  );
}

export default function PingMap({ cells }) {
  const W = 1000;
  const H = 440;
  const R = 46;

  let hexes = [];
  if (cells) {
    const w = Math.sqrt(3) * R;
    const h = 2 * R;
    for (let r = 0; r * h * 0.75 < H + R; r++) {
      for (let c = 0; c * w < W + R; c++) {
        const cx = c * w + (r % 2 ? w / 2 : 0);
        const cy = r * h * 0.75;
        hexes.push(
          <polygon
            key={`${r}-${c}`}
            points={hexPoints(R, cx, cy)}
            className="h3-cell"
          />,
        );
      }
    }
  }

  return (
    <div className="pingmap">
      <MapBg />
      {cells && (
        <svg
          className="map-cells"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {hexes}
        </svg>
      )}
      {PINGS.map((p, i) => (
        <span key={i} className="gps" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
          <span
            className="ring"
            style={{ animationDelay: `${(i % 8) * 0.3}s` }}
          />
          <span className="dot" />
        </span>
      ))}
    </div>
  );
}