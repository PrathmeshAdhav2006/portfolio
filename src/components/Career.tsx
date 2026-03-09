import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>Computer Engineering</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Currently in my 2nd year of studying Computer Engineering in Pune, India.
              Focusing on building robust backend systems and understanding DevOps practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Backend & DevOps Engineer</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively seeking internship opportunities in Backend Development and DevOps.
              Eager to apply my skills in Java, Spring Boot, Docker, AWS, and CI/CD pipelines to real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
