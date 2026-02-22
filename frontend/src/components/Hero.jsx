import { useState } from "react";
import useImages from "../hooks/images";
export default function Hero({ selectedBlock, onBack }) {
  const parsePercentage = (value) => {
    if (!value || value === "N/A") return 0;
    return parseInt(value.replace("%", ""), 10) || 0;
  };
  const { images, loading } = useImages();


  const getUrlFromFileName = (fileName, images) => {
    const item = images.find(img => img.file_name === fileName);
    return item ? item.image_url : null;
  };

  // --- AI Chatbot State ---
  const [year, setYear] = useState("First");
  const [gpa, setGpa] = useState(9.0);
  const [block, setBlock] = useState("A");
  const [results, setResults] = useState(null);

  const fetchAvailability = async () => {
    try {
      const res = await fetch("https://hostel-buddies-ai.onrender.com/check-availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ year, gpa, block }),
      });

      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  if (selectedBlock) {
    console.log("Looking for:", `${selectedBlock.letter}INFO`);
    console.log("Images available:", images);
  }
  return (
    <section id="home" className="hero" data-aos="fade-down">
      <div className="hero-container">
        <div className="hero-content">
          {/* Text Section */}
          <div className="hero-text">
            <h1 className="hero-title">
              {selectedBlock
                ? `Welcome to ${selectedBlock.name} Block`
                : "Welcome to Hostel Buddy"}
            </h1>

            {selectedBlock ? (
              <div className="Ok">
                <div className="ratings">
                  <h3>Facilities Overview</h3>

                  {/* Mess */}
                  <div className="skill-item">
                    <span className="skill-name">
                      Mess &nbsp; (• Hygiene &nbsp; • Taste &nbsp; • Dishwashing)
                    </span>
                    {selectedBlock.Mess === "N/A" ? (
                      <span className="NA">Not Available inside the Hostel</span>
                    ) : (
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${parsePercentage(selectedBlock.Mess)}%` }}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* Washroom */}
                  <div className="skill-item">
                    <span className="skill-name">
                      Washroom &nbsp; (• Functionality &nbsp; • Maintenance)
                    </span>
                    {selectedBlock.Washroom === "N/A" ? (
                      <span className="NA">Not Available inside the Hostel</span>
                    ) : (
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${parsePercentage(selectedBlock.Washroom)}%` }}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* Dhobi */}
                  <div className="skill-item">
                    <span className="skill-name">
                      Dhobi &nbsp; (• Detergent Quality &nbsp; • No.of Days)
                    </span>
                    {selectedBlock.Dhobi === "N/A" ? (
                      <span className="NA">Not Available inside the Hostel</span>
                    ) : (
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${parsePercentage(selectedBlock.Dhobi)}%` }}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* Room Cleaning */}
                  <div className="skill-item">
                    <span className="skill-name">
                      Room Cleaning &nbsp; (• Punctuality &nbsp; • Behaviour)
                    </span>
                    {selectedBlock.RoomClean === "N/A" ? (
                      <span className="NA">Not Available inside the Hostel</span>
                    ) : (
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${parsePercentage(selectedBlock.RoomClean)}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Facilities */}
                <div className="Additional">
                  {selectedBlock.Facilities !== "N/A" ? (
                    <span>{selectedBlock.Facilities}</span>
                  ) : null}
                </div>
              </div>
            ) : (
              <p className="hero-description">
                <img src="house.gif"></img>
                <br />
                <span className="solution">Your one-stop solution for managing hostel needs.</span>
              </p>
            )}

            {
              selectedBlock && (
                <button
                  onClick={onBack}
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#007BFF",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  ← Back
                </button>
              )
            }
          </div >

          {/* Visual Section */}
          < div className="hero-visual" >
            <div className="code-window">
              <div className="window-header">
                <span className="window-title">
                  {selectedBlock
                    ? selectedBlock.name
                    : "🏫 Room Availability"}
                </span>
                <div className="window-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
              </div>
              {/* Show Image if Block Selected */}
              {selectedBlock ? (
                <div className="code-content">
                  <img
                    src={getUrlFromFileName(`${selectedBlock.letter}INFO`, images)}
                    alt={selectedBlock.letter}
                    className="block-image"
                    style={{
                      borderRadius: "10px",
                      maxWidth: "100%",
                      height:
                        selectedBlock.letter === "T" || selectedBlock.letter === "S"
                          ? "100%"
                          : "auto",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    }}
                  />

                </div>
              ) : (
                // Chatbot only if NO block is selected
                <div className="chatbot">
                  <h3>Check Hostel Room Availability</h3>

                  <label>
                    Current Year:
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <option>First</option>
                      <option>Second</option>
                      <option>Third</option>
                    </select>
                  </label>

                  <label>
                    CGPA:
                    <input
                      type="number"
                      step="0.1"
                      value={gpa}
                      onChange={(e) => setGpa(parseFloat(e.target.value))}
                    />
                  </label>

                  <label>
                    Block Wanted(Letter Only):
                    <input
                      type="text"
                      value={block}
                      onChange={(e) => setBlock(e.target.value.toUpperCase())}
                    />
                  </label>

                  <button onClick={fetchAvailability} className="check-btn">
                    Check
                  </button>
                  <p className="Terms">*Don't take risk if chances are below 55% <br />
                  **The allocation percentages have been estimated based on data collected over the past three years. These predictions are indicative in nature and may not be 100% accurate. Additionally, only a certain proportion of the total available rooms is allocated to each year or student group.</p>
                  
                  {/* Results */}
                  {results && results.success && (
                    <div className="results">
                      <h4>
                        {results.year} Year | GPA {results.gpa_range} | Block{" "}
                        {results.block}
                      </h4>
                      <table className="results-table">
                        <thead>
                          <tr>
                            <th>Room</th>
                            <th>Chances</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.results.map((r, i) => (
                            <tr key={i}>
                              <td>{r.room}</td>
                              <td>{r.chances}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {results && !results.success && (
                    <p className="error-message">{results.message}</p>
                  )}
                </div>
              )}
            </div>
          </div >
        </div >
      </div >
    </section >
  );
}
