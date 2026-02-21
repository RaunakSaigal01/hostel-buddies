export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <i className="fa-solid fa-house"></i> Upcoming Blocks
        </h2>

        <div className="projects-grid">
          {/* Project 1 */}
          <div
            className="project-card"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: "opacity 0.6s, transform 0.6s",
            }}
          >
            <div className="project-header">
              <div className="project-icon">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <div className="project-links">
                <a href="https://github.com/dashboard" className="project-link">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="file:///C:/Users/Shashwat/Desktop/proj/Owner.html"
                  className="project-link"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <h3 className="project-title">DINE-EASE</h3>
            <p className="project-description">
              A website that helps people of the area to find seat availability
              in the restaurants nearby their area.
            </p>
            <div className="project-tech">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Animation</span>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="project-card"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: "opacity 0.6s, transform 0.6s",
            }}
          >
            <div className="project-header">
              <div className="project-icon">
                <i className="fa-solid fa-warehouse"></i>
              </div>
              <div className="project-links">
                <a href="https://github.com/dashboard" className="project-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://github.com/dashboard" className="project-link">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <h3 className="project-title">Inventory Management</h3>
            <p className="project-description">
              Track the incoming requests from the customer and check the
              supplies from the supplier end.
            </p>
            <div className="project-tech">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React JS</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Express JS</span>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className="project-card"
            style={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: "opacity 0.6s, transform 0.6s",
            }}
          >
            <div className="project-header">
              <div className="project-icon">
                <i className="fa-solid fa-plane-circle-check"></i>
              </div>
              <div className="project-links">
                <a href="https://github.com/dashboard" className="project-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="http://localhost:8501/" className="project-link">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <h3 className="project-title">Flight Safety Detector</h3>
            <p className="project-description">
              An AI model which helps detect whether a flight is ready for
              takeoff based on datasets like fuel weight, passenger weight, tyre
              pressure, etc.
            </p>
            <div className="project-tech">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">API</span>
              <span className="tech-tag">Animation</span>
              <span className="tech-tag">Chart.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
