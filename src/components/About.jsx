function About() {
  return (
    <div className="about-page">
      <div className="about-banner">
        <h1>Brief History of Pamantasan ng Cabuyao</h1>
      </div>

      <div className="about-content">
        <div className="about-history">
          <p>
            Pamantasan ng Cabuyao (PnC) was established through <b>Municipal
            Ordinance No. 2003-059</b>, signed by <b>Mayor Proceso D. Aguillo</b> on{" "}
            <b>April 16, 2003</b>. It was created following the closure of the{" "}
            <b>Laguna State Polytechnic College (LSPC)–Cabuyao Campus</b>,
            which ended operations on <b>March 31, 2003</b> due to administrative issues.
          </p>

          <p>
            With guidance from <b>Dr. Benjamin Tayabas</b>, then-president of the{" "}
            <b>Pamantasan ng Lungsod ng Maynila (PLM)</b>, and the efforts of
            local leaders and educators, PnC was officially inaugurated by{" "}
            <b>President Gloria Macapagal Arroyo</b> on{" "}
            <b>April 19, 2003</b>.
          </p>

          <p>
            Since then, the University has continued to grow, offering programs in
            <b> Education, Business Administration, Engineering, and Information Technology</b>.
            PnC remains committed to providing affordable and quality education to the youth of Cabuyao.
          </p>
        </div>

        <div className="about-sections">
          <div className="about-box">
            <h2>Administrative Officers</h2>
            <ul>
              <li><b>DR. ROBERTO F. RAÑOLA JR.</b> – University President</li>
              <li><b>DR. RENELINA D. MAÑABO</b> – VExecutive Vice President</li>
              <li><b>DR. GEORGE V. LAMBOT</b> – Vice President for Academics and Student Services</li>
              <li><b>DR. JESSICA D. REY</b> – Vice President for Planning, Research, and Extension</li>
            </ul>
          </div>

          <div className="about-box">
            <h2>Faculty Members</h2>
            <ul>
              <li><b>DR. GIMA B. MONTECILLO</b> – Dean, College of Computing Studies</li>
              <li><b>ASST. PROF. ARCELITO C. QUIATCHON</b> – BSIT Department Chair, College of Computing Studies</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="about-footer">
        <p>“Proud to be Dangal ng Bayan”</p>
      </footer>
    </div>
  );
}

export default About;