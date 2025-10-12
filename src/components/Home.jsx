import heroBanner from '../assets/banner.jpg';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
    <div
      className="hero-section position-relative text-white"
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '550px',
        borderRadius: '0 0 16px 16px',
        overflow: 'hidden',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(21, 31, 34, 0.65)',
          zIndex: 1,
        }}
      ></div>
      
      <div
        className="container h-100 d-flex flex-row align-items-center justify-content-space-between"
        style={{ position: 'relative', zIndex: 2 }}
        id='bannerContent'
      >
        <div className="col-md-5 text-start">
          <h2
            className="fw-bold mb-3 text-success"
            style={{ fontSize: '2rem'}}
          >
          Pamantasan ng Cabuyao
          </h2>

          <h1
            className="fw-bold"
            style={{
              fontSize: '2.4rem',
              color: '#f8f9fa',
            }}
          >
            “Dangal ng Bayan, bringing pride and honor to the nation.”
          </h1>
        </div>

        <div className="col-md-6 text-end">
          <p
            className="mb-4"
            style={{
              fontSize: '1.2rem',
              color: '#eeeeeeff',
              lineHeight: '1.7',
            }}
          >
            Welcome to the official website of the University of Cabuyao a center of
            excellence committed to developing future leaders and value-laden professionals guided
            by integrity, competence, and heroism.
            <br /><br />
            The Pamantasan ng Cabuyao is a university in the city of Cabuyao, province of
            Laguna, Philippines. It was founded by then Mayor Proceso “Etok” D. Aguillo,
            through the enactment of Municipal Ordinance 2003-059 approved on April 16,
            2003.
          </p>

          <Link
            to="/about"
            className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill"
            style={{ width: '200px' }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
    </>
    
  );
}
export default Home;
