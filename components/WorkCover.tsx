import type { CoverKind } from "@/data/works";

const covers: Record<CoverKind, { from: string; to: string; label: string }> = {
  atlas: { from: "#1b2430", to: "#0c1016", label: "Peta" },
  ronda: { from: "#1a221c", to: "#0d110e", label: "Rute" },
  lumen: { from: "#241c12", to: "#120e09", label: "Cahaya" },
  nocturne: { from: "#1a1520", to: "#0c0a10", label: "Malam" },
  folio: { from: "#1c1a16", to: "#0e0d0b", label: "Studio" },
  echo: { from: "#121c22", to: "#0a1014", label: "Gema" },
};

export function WorkCover({
  kind,
  className = "",
}: {
  kind: CoverKind;
  className?: string;
}) {
  const cover = covers[kind];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(160deg, ${cover.from}, ${cover.to})` }}
    >
      <svg
        viewBox="0 0 800 500"
        className="h-full w-full"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        {kind === "atlas" ? <AtlasArt /> : null}
        {kind === "ronda" ? <RondaArt /> : null}
        {kind === "lumen" ? <LumenArt /> : null}
        {kind === "nocturne" ? <NocturneArt /> : null}
        {kind === "folio" ? <FolioArt /> : null}
        {kind === "echo" ? <EchoArt /> : null}
      </svg>
    </div>
  );
}

function AtlasArt() {
  return (
    <g fill="none" stroke="#d4a056" strokeOpacity="0.55">
      <circle cx="400" cy="250" r="140" strokeWidth="1" />
      <circle cx="400" cy="250" r="90" strokeWidth="1" stroke="#5eb8b0" />
      <path d="M160 250h480M400 70v360" strokeWidth="0.8" strokeOpacity="0.35" />
      <path
        d="M220 320c70-80 130-40 180-90s110-20 180 40"
        strokeWidth="1.6"
        stroke="#f3efe6"
        strokeOpacity="0.45"
      />
      <circle cx="400" cy="230" r="5" fill="#d4a056" stroke="none" />
      <circle cx="560" cy="270" r="4" fill="#5eb8b0" stroke="none" />
    </g>
  );
}

function RondaArt() {
  return (
    <g fill="none">
      <rect
        x="180"
        y="90"
        width="440"
        height="320"
        stroke="#5eb8b0"
        strokeOpacity="0.35"
      />
      <path
        d="M220 360l80-140 90 60 70-120 90 80 70-40"
        stroke="#d4a056"
        strokeWidth="2"
        strokeOpacity="0.7"
      />
      {[220, 300, 390, 460, 550, 620].map((x, i) => (
        <circle key={x} cx={x} cy={[360, 220, 280, 160, 240, 200][i]} r="5" fill="#f3efe6" />
      ))}
    </g>
  );
}

function LumenArt() {
  return (
    <g>
      <polygon points="400,70 470,230 400,210 330,230" fill="#d4a056" opacity="0.85" />
      <polygon points="400,210 620,430 180,430" fill="#d4a056" opacity="0.16" />
      <rect x="250" y="300" width="80" height="130" fill="#f3efe6" opacity="0.08" />
      <rect x="470" y="260" width="60" height="170" fill="#5eb8b0" opacity="0.18" />
    </g>
  );
}

function NocturneArt() {
  return (
    <g>
      <circle cx="520" cy="140" r="46" fill="#f3efe6" opacity="0.16" />
      <ellipse cx="300" cy="340" rx="180" ry="70" fill="#d4a056" opacity="0.12" />
      <path
        d="M80 390c80-90 140-40 220-110 70-60 130-30 220-80 60-34 140-20 200 10"
        fill="none"
        stroke="#f3efe6"
        strokeOpacity="0.28"
        strokeWidth="1.2"
      />
      <circle cx="260" cy="250" r="8" fill="#d4a056" />
    </g>
  );
}

function FolioArt() {
  return (
    <g fill="none" stroke="#f3efe6" strokeOpacity="0.28">
      <rect x="200" y="80" width="240" height="320" />
      <rect x="360" y="120" width="240" height="280" stroke="#d4a056" strokeOpacity="0.5" />
      <path d="M230 150h180M230 180h140M230 210h160" strokeWidth="1.4" />
      <circle cx="520" cy="260" r="36" stroke="#5eb8b0" />
    </g>
  );
}

function EchoArt() {
  return (
    <g fill="none" stroke="#5eb8b0" strokeOpacity="0.5">
      {[70, 110, 150, 190].map((r) => (
        <ellipse key={r} cx="300" cy="250" rx={r + 40} ry={r} />
      ))}
      <circle cx="300" cy="250" r="6" fill="#d4a056" stroke="none" />
      <path d="M360 250h280" stroke="#d4a056" strokeOpacity="0.6" />
    </g>
  );
}
