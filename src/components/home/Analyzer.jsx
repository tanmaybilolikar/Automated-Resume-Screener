import React, { useState, useEffect } from "react";
import "./analyzer.css";

const Analyzer = () => {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [position, setPosition] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
    }, 3000); 
  };

  useEffect(() => {
    document.body.classList.add("analyzer-body"); 
    return () => {
      document.body.classList.remove("analyzer-body"); 
    }; // Correct placement of the cleanup function
  }, []);
  
  return (
    <div className="analyzer-page">
      {/* Header Section */}
      <header className="analyzer-header">
        <h1>Resume Analyzer</h1>
        <p>Upload your resume, provide the job details, and get a detailed analysis to enhance your chances of landing your dream job.</p>
      </header>

      <div className="job-description-section">
        <h2>Job Details</h2>
        <div className="job-inputs">
          <textarea
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Job Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
      </div>

      <div className="step-indicator">
        <div className={`step ${file ? "completed" : ""}`}>1</div>
        <div className={`step ${processing ? "completed" : ""}`}>2</div>
        <div className={`step ${!processing && file ? "completed" : ""}`}>3</div>
      </div>

      <div className="analyzer-container">
        <div className="upload-section">
          <label htmlFor="file-upload" className="custom-file-upload">
            {processing ? "Processing..." : "Upload Your Resume"}
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
          {processing && <div className="processing-animation"></div>}
        </div>

        {!processing && file && (
          <>
            <div className="result-summary">
              <h2>Analysis Summary</h2>
              <p>Your resume has been analyzed against the job description provided. Below are the key insights and recommendations:</p>
            </div>

            <div className="analysis-results">
              <div className="box suggestions">
                <h3>Suggestions</h3>
                <p>Improve your work experience section by adding quantifiable achievements.</p>
              </div>
              <div className="box percentage">
                <h3>Percentage Match</h3>
                <p>85% match with the job description.</p>
              </div>
              <div className="box tips">
                <h3>Tips</h3>
                <p>Consider using action verbs to make your resume more dynamic.</p>
              </div>
              <div className="box changes">
                <h3>Recommended Changes</h3>
                <p>Update your skills section to reflect the most recent technologies you've worked with.</p>
              </div>
              <div className="box rewrites">
                <h3>Rewrites</h3>
                <p>Rewrite the summary to better align with your target role.</p>
              </div>
            </div>
          </>
        )}
      </div>

\      <section className="recommendations">
        <h2>Personalized Recommendations</h2>
        <div className="recommendation-cards">
          <div className="recommendation">
            <h3>Keyword Optimization</h3>
            <p>Include relevant keywords from the job description to pass ATS screenings.</p>
          </div>
          <div className="recommendation">
            <h3>Skills Highlight</h3>
            <p>Emphasize skills that are critical for the position you’re applying for.</p>
          </div>
          <div className="recommendation">
            <h3>Formatting Tips</h3>
            <p>Ensure your resume format is clean and professional, with consistent font usage.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Analyzer;
