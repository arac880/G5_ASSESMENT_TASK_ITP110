function Admission() {
  return (
    <div className="admission-page">
    
      <section className="admission-header">
        <div className="header-content">
          <h1>Admission</h1>
          <p>Pamantasan ng Cabuyao</p>
          <div className="header-line"></div>
          <p className="header-sub">
            Empowering future leaders through excellence and integrity.
          </p>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="requirements">
        <h2>Admission Requirements</h2>
        <p className="intro">
          The Pamantasan ng Cabuyao welcomes aspiring students who wish to
          pursue quality and affordable education. Please prepare the following
          documents before applying:
        </p>

        <div className="req-cards">
          <div className="card">
            <h3>Basic Documents</h3>
            <ul>
              <li>Completed Application Form</li>
              <li>Form 138 / Report Card</li>
              <li>Certificate of Good Moral Character</li>
              <li>2 pcs. 2x2 ID Picture (white background)</li>
            </ul>
          </div>

          <div className="card">
            <h3>For Transferees</h3>
            <ul>
              <li>Official Transcript of Records</li>
              <li>Honorable Dismissal</li>
              <li>Copy of Grades from Previous School</li>
            </ul>
          </div>

          <div className="card">
            <h3>For Senior High Graduates</h3>
            <ul>
              <li>Original Senior High School Card</li>
              <li>PSA Birth Certificate (Photocopy)</li>
              <li>Barangay Clearance / Residence Certificate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Admission Process  */}
      <section className="process">
        <h2>Admission Process</h2>
        <div className="process-timeline">
          <div className="step">
            <div className="circle">1</div>
            <div className="step-content">
              <h3>Get an Application Form</h3>
              <p>
                Secure an Admission Application Form from the Registrar’s Office
                or download it online.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <div className="step-content">
              <h3>Submit Your Documents</h3>
              <p>
                Submit all required documents for evaluation by the admissions
                committee.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <div className="step-content">
              <h3>Take the Entrance Examination</h3>
              <p>
                Attend the scheduled examination and wait for the release of
                results.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="circle">4</div>
            <div className="step-content">
              <h3>Proceed to Enrollment</h3>
              <p>
                Once officially admitted, proceed to enrollment and attend the
                orientation for new students.
              </p>
            </div>
          </div>
        </div>
      </section>
        {/* Download Form Section */}
      <section className="download-form">
  <div className="download-container">
    <h2>Download Admission Form</h2>
    <p>
      You can download the admission form below and submit it together with your
      admission requirements to the Registrar’s Office.
    </p>
    <a href="/forms/PNC_Admission_Form.pdf" download className="download-btn">
      ⬇ Download Form
    </a>
  </div>
</section>
    </div>
  );
}

export default Admission;
