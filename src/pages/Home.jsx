import About from './About';
import Courses from './Courses';
import MindDynamics from './MindDynamics';
import Results from './Results';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Contact from './Contact';
import FAQ from '../components/FAQ';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          controls
        >
          <source src="/VID-20260220-WA0027 (1).mp4" type="video/mp4" />
        </video>
      </section>

      {/* Catchy Urgency Admission Banner */}
      <div className="admission-alert-banner">
        <div className="banner-pulse-dot"></div>
        <div className="banner-message">
          <strong>📢 URGENT ADMISSION NOTICE:</strong> Yearly intake is strictly limited to <strong>100 seats only</strong> to maintain our high-focus premium coaching standards. Batch 2026 seats are filling fast!
        </div>
        <a href="#contact" className="banner-btn">ENQUIRE NOW</a>
      </div>

      {/* SPA Sections */}
      <div id="courses"><Courses /></div>
      <div id="mind-dynamics"><MindDynamics /></div>
      
      <div id="results"><Results /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="about"><About /></div>
      <div id="gallery"><Gallery /></div>
      <div id="faq"><FAQ /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Home;
