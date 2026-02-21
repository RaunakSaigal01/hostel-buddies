import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Particles from "./components/Particles";
import MouseTrail from "./components/MouseTrail";
import BackToTop from "./components/BackToTop";
import HostelBlocks from "./components/HostelBlocks";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Rooms from "./components/Rooms";
import LoginPage from "./components/LoginPage";
import { signOut } from "firebase/auth";   // ✅ import logout
import { auth } from "./firebase";   
import AOS from "aos";
import ParticlesBackground from "./components/particlesbackground";
import "aos/dist/aos.css";


function App() {
  const [user, setUser] = useState(null); // track logged in user
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedBlockId, setSelectedBlockId] = useState(null);

  const heroRef = useRef(null);

  useEffect(() => {
    if (selectedBlock && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedBlock]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      easing: "ease-in-out", // animation easing
      once: true, // animate only once
      mirror: false, // do not repeat animation when scrolling back
    });
  }, []);


  const goHome = () => {
    setSelectedBlock(null);
    setSelectedBlockId(null);
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // clear user → goes back to LoginPage
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <>
      <ParticlesBackground />
      {!user ? (
        <LoginPage onLogin={(userData) => setUser(userData)} />
      ) : (
        <div>
          <Particles />
          <MouseTrail />
          <Navbar
            onSelectBlock={(block) => {
              setSelectedBlock(block);
              setSelectedBlockId(block.id);
            }}
            onLogout={handleLogout}
            onGoHome={goHome}
            selectedBlockId={selectedBlockId}
          />

          <div ref={heroRef}  >
            <Hero selectedBlock={selectedBlock} onBack={() => setSelectedBlock(null)} />
          </div>

          {!selectedBlock && (
            <HostelBlocks
              onSelectBlock={(block) => {
                setSelectedBlock(block);
                setSelectedBlockId(block.id);
              }}
            />
          )}

          {selectedBlock && <Rooms block={selectedBlock}/>}

          <Contact  />
          <Footer  />
          <BackToTop  />
        </div>
      )}
    </>
  );
}

export default App;
