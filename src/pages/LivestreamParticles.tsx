import React from "react";

const LivestreamParticles: React.FC = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: "radial-gradient(circle at 30% 40%, rgba(0,180,255,0.12) 0, transparent 60%), radial-gradient(circle at 70% 60%, rgba(0,120,255,0.10) 0, transparent 60%)"
      }}
    >
      {/* Simple blue particles using absolutely positioned divs */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${8 + Math.random() * 16}px`,
            height: `${8 + Math.random() * 16}px`,
            borderRadius: "50%",
            background: `rgba(0,180,255,${0.08 + Math.random() * 0.12})`,
            filter: "blur(1.5px)",
            opacity: 0.7,
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export default LivestreamParticles;
