import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const initParticles = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={initParticles}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#F8F7FF" },
          opacity: { value: 0.6 },
          size: { value: 3.6 },
          links: {
            enable: true,
            distance: 120,
            color: "#F8F7FF",
            opacity: 0.35,
            width: 0.3,
          },
          move: { enable: true, speed: 1 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        background: { color: "#030c48" },
      }}
    />
  );
}

export default ParticlesBackground;
