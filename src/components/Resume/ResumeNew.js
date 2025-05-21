import React from "react";
import { Container } from "react-bootstrap";


function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
      

        <h1 className="text-center mb-4">My Resume</h1>

        {/* Optional Download Button */}
        <div className="text-center mb-3">
          <a
<<<<<<< HEAD
            href="/mugabo/resume.pdf"
=======
            href="/resume.pdf"
>>>>>>> 85861580542385b51ac2eaec96537c487c9b2b11
            download="Mugabo_Adolphe_Resume.pdf"
            className="btn btn-primary"
          >
            Download PDF
          </a>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="d-flex justify-content-center">
          <iframe
<<<<<<< HEAD
            src="/mugabo//resume.pdf"
=======
            src="/resume.pdf"
>>>>>>> 85861580542385b51ac2eaec96537c487c9b2b11
            title="Resume PDF"
            width="80%"
            height="800px"
            style={{ border: "none" }}
          />
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
