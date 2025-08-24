export function LogoBrand() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g id="orbits" fill="none" vectorEffect="non-scaling-stroke">
        <path
          id="orbitDesign"
          d="M44 128 A84 84 0 0 1 128 44"
          stroke="#ec4899"
        />
        <path
          id="orbitDevelopment"
          d="M128 224 A96 96 0 0 1 32 128"
          stroke="#6366f1"
        />
        <path
          id="orbitAI"
          d="M128 20 A108 108 0 0 1 236 128"
          stroke="#10b981"
        />
      </g>
      <g id="drops">
        <circle id="dropDesign" cx={44} cy={128} r={5} fill="#ec4899" />
        <circle id="dropDevelopment" cx={128} cy={224} r={5} fill="#6366f1" />
        <circle id="dropAI" cx={128} cy={20} r={5} fill="#10b981" />
      </g>
      <g id="sparkGroup" fill="none" vectorEffect="non-scaling-stroke">
        <path
          id="spark"
          d="M128 112 L144 128 L128 144 L112 128 Z"
          stroke="#f59e0b"
        />
      </g>
      <circle id="core" cx={128} cy={128} r={4} fill="#f59e0b" />
    </svg>
  );
}
