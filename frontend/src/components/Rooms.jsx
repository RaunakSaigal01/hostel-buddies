import { useState } from "react";
import { useEffect } from "react";
import useImages from "../hooks/images";


export default function Rooms({ block }) {
  const { images, loading } = useImages();
  if (!block) {
    return (
      <section id="rooms" className="rooms">
        <div className="container">
          <h2 className="section-title">AI Initializing...</h2>
        </div>
      </section>
    );
  }

  const roomTypes = {
    AC1: { name: "1 Bed AC" },
    NAC1: { name: "1 Bed Non-AC" },
    AC2: { name: "2 Bed AC" },
    NAC2: { name: "2 Bed Non-AC" },
    AC3: { name: "3 Bed AC" },
    NAC3: { name: "3 Bed Non-AC" },
    AC4: { name: "4 Bed AC" },
    NAC4: { name: "4 Bed Non-AC" },
    AC6: { name: "6 Bed AC" },
    NAC6: { name: "6 Bed Non-AC" },
    AC8: { name: "8 Bed AC" },
    NAC8: { name: "8 Bed Non-AC" },
  };

  const [flipped, setFlipped] = useState({});
  const [popup, setPopup] = useState(null);

  const handleFlip = (key) => {
    setFlipped((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const getImageUrl = (blockLetter, key) => {
  const fileName = `${blockLetter}${key}`; // ✅ ACOR

  const found = images.find(
    (img) => img.file_name === fileName
  );

  return found ? found.image_url : null;
};

  // Step 1: Question Bank
const questionBank = [
  // --- Physics ---
  { q: "A current of 3 A flows for 2 minutes. Find the charge.", a: 360 },
  { q: "A 2 Ω resistor has 10 V across it. Find the current.", a: 5 },
  { q: "Force required to accelerate 5 kg at 4 m/s².", a: 20 },
  { q: "Power consumed when 2 A flows through a 10 Ω resistor.", a: 40 },

  // --- Maths ---
  { q: "Area of a square of side 12 cm?", a: 144 },
  { q: "Volume of a sphere of radius 7 cm?", a: 1436 }, // approx
  { q: "tan 45° ?", a: 1 },
  { q: "sin 30° ?", a: 0.5 },
  { q: "cos 60° ?", a: 0.5 },
  { q: "Area of a circle of radius 7 cm?", a: 154 },
  { q: "Number of spheres formed if radius 3.5 cm sphere melted to 0.7 cm spheres?", a: 125 },

  // --- Atomic Numbers ---
  { q: "Atomic number of Oxygen?", a: 8 },
  { q: "Atomic number of Carbon?", a: 6 },
  { q: "Atomic number of Sodium?", a: 11 },
  { q: "Atomic number of Aluminium?", a: 13 },
  { q: "Atomic number of Potassium?", a: 19 },
  { q: "Atomic number of Neon?", a: 10 },
  { q: "Atomic number of Chlorine?", a: 17 },
  { q: "Atomic number of Magnesium?", a: 12 },
  { q: "Atomic number of Iron?", a: 26 },
];

// Step 2: Function to generate random Q
const generateQuestion = (key) => {
  
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    const selected = questionBank[randomIndex];
    setPopup({
      key,
      question: selected.q,
      answer: selected.a,
      input: "",
      showSecret: false,
      error: "",
    });
  
};

// Step 3: Answer check
const checkAnswer = () => {
  // Use == to handle numbers vs strings like "Ω·m"
  if (popup.input.trim() == popup.answer) {
    setPopup((prev) => ({ ...prev, showSecret: true, error: "" }));
  } else {
    setPopup((prev) => ({ ...prev, error: "❌ Wrong answer! Try again." }));
  }
};


  return (
    <section id="rooms" className="rooms" data-aos="fade-right">
      <div className="container">
        <h2 className="section-title">
          Available Rooms in {block.name} Block
        </h2>
        {loading && <p>Loading images...</p>}
        <div className="projects-grid">
          {Object.keys(roomTypes).map((key) =>
  block[key] > 0 ? (
    <div key={`${block.letter}-${key}`} className="room-card-wrapper">
      <div
        className={`flip-card ${flipped[key] ? "flipped" : ""}`}
        onClick={() => handleFlip(key)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3>{roomTypes[key].name}</h3>
            <p>No.of Rooms: {block[key]}</p>
            <br />
            <p className="pic">⁕⁕Click to See picture⁕⁕<br /> <br />**Open in New Tab for Better Experience**</p> 
          </div>
          <div className="flip-card-back">
            <img
              src={getImageUrl(block.letter, key)}
              alt={roomTypes[key].name}
            />
          </div>
        </div>
      </div>

      {block["Secret" + key] && (
        <div
          className="secret-div"
          onClick={() => generateQuestion(key)}
        >
          <span>🔒</span>
        </div>
      )}
    </div>
  ) : null
)}

        </div>
      </div>

      {/* POPUP MODAL */}
      {popup && (
        <div className="popup-overlay">
          <div className="popup">
            {!popup.showSecret ? (
  <>
    <h3>Solve to Unlock Secret</h3>
    <p>{popup.question}</p>
    <input
      type="number"
      value={popup.input}
      onChange={(e) =>
        setPopup((prev) => ({ ...prev, input: e.target.value, error: "" }))
      }
    />
    {popup.error && <p style={{ color: "red", marginTop: "8px" }}>{popup.error}</p>}
    <button onClick={checkAnswer}>Submit</button>
    <button onClick={() => setPopup(null)}>Close</button>
  </>
) : (
  <>
    <h3>Secret Unlocked 🎉</h3>
    <p>{block["Secret" + popup.key]}</p>
    <button onClick={() => setPopup(null)}>Close</button>
  </>
)}

          </div>
        </div>
      )}
    </section>
  );
}
