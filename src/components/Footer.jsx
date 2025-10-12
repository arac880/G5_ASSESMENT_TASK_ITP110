import logo from "../assets/pnc-logo.png";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#006633",
        color: "white",
        padding: "2rem 0",
        height: "220px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Logo */}
          <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
            <img
              src={logo}
              alt="University of Cabuyao Logo"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
          </div>

          {/* Right: Text */}
          <div className="col-md-9 text-center text-md-start">
            <h4 className="fw-bold mb-2">Pamantasan ng Cabuyao - UC</h4>
            <p className="mb-1">
              <small>Dangal ng Bayan — University of Cabuyao</small>
            </p>
            <p className="mb-2">
              <small>Brgy. Banay-Banay, City of Cabuyao, Laguna, Philippines</small>
            </p>

            <div>
              <a className="fb-icon"
                href="https://www.facebook.com/PamantasanNgCabuyaoOfficial"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffffff",
                  marginRight: "15px",
                  textDecoration: "underline"
                }}
              >
                <i className="bi bi-facebook" style={{ fontSize: "1.5rem", color: "#ffffffff" }}></i>
                Facebook
              </a>
              <a
                href="https://pnc.edu.ph/"
                style={{
                  color: "#ffffffff",
                  textDecoration: "underline",
                }}
              >
                <i className="bi bi-globe" style={{ fontSize: "1.5rem", color: "#ffffffff" }}></i>
                Official University Page
              </a>
            </div>

            <p className="mt-3 mb-0">
              <small>© {new Date().getFullYear()} University of Cabuyao | All Rights Reserved</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
