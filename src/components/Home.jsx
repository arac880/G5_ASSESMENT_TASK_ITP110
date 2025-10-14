import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroBanner from "../assets/banner.jpg";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";
import "./Home.css";

const slides = [
  { image: slide1, title: "Sportfest Spirit", subtitle: "Showcasing unity and athletic excellence during the Sportsfest." },
  { image: slide2, title: "Artfest Celebration", subtitle: "Students and faculty come together to celebrate creativity, expression, and collaboration."},
  { image: slide3, title: "Pailaw", subtitle: "A dazzling night of parol-making and illumination." },
  { image: slide4, title: "University Week", subtitle: "Fostering creativity and technology-driven ideas." },
  { image: slide5, title: "Buwan ng Wika", subtitle: "Honoring Filipino heritage through cultural performances and artistic displays." },
  { image: slide6, title: "Ode to the Nation", subtitle: "A moment of unity and respect, reflecting shared values and commitment to the nation." },
  { image: slide7, title: "Respect and Gratitude", subtitle: "A heartfelt choral performance dedicated to mentors who inspire excellence every day." },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [paused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section position-relative text-white"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "550px",
          borderRadius: "0 0 6px 6px",
          overflow: "hidden",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(21, 31, 34, 0.65)", zIndex: 1 }}
        ></div>

        <div
          className="container h-100 d-flex flex-row align-items-center justify-content-space-between"
          style={{ position: "relative", zIndex: 2 }}
          id="bannerContent"
        >
          <div className="col-md-5 text-start">
            <h2 className="fw-bold mb-3 text-success" style={{ fontSize: "2rem" }}>
              Pamantasan ng Cabuyao
            </h2>
            <h1 className="fw-bold" style={{ fontSize: "2.4rem", color: "#f8f9fa" }}>
              “Dangal ng Bayan, bringing pride and honor to the nation.”
            </h1>
          </div>

          <div className="col-md-6 text-end">
            <p
              className="mb-4"
              style={{
                fontSize: "1.2rem",
                color: "#eeeeeeff",
                lineHeight: "1.7",
              }}
            >
              Welcome to the official website of the University of Cabuyao, a center of excellence committed to developing future leaders and value-laden professionals guided by integrity, competence, and heroism.
              <br />
              <br />
              The Pamantasan ng Cabuyao is a university in the city of Cabuyao, province of Laguna, Philippines. It was founded by then Mayor Proceso “Etok” D. Aguillo, through the enactment of Municipal Ordinance 2003-059 approved on April 16, 2003.
            </p>
            <Link
              to="/about"
              className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill"
              style={{ width: "200px" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    
      <div className="sliderContainer">
        <div
          className="slideshow-container mt-5 mb-5 position-relative h-500"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay"></div>
              <div className="caption">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}

          <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
          <button className="next-btn" onClick={nextSlide}>&#10095;</button>

          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
