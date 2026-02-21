import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

export default function ParticlesBackground() {
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    });
  }, []);

  
  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: "#F8F7FF" },
      opacity: { value: 0.6 },
      size: { value: 4 },
      links: {
        enable: true,
        distance: 120,
        color: "#F8F7FF",
        opacity: 0.5,
        width: 0.3
      },
      move: { enable: true, speed: 1 }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    background: { color: "#030c48" }
  }), []);

  return <Particles id="tsparticles" options={options} />;
}
