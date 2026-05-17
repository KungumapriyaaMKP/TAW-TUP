import About from './About';
import Courses from './Courses';
import MindDynamics from './MindDynamics';
import Results from './Results';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Contact from './Contact';
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


      {/* SPA Sections */}
      <div id="courses"><Courses /></div>
      <div id="mind-dynamics"><MindDynamics /></div>
      
      <div id="results"><Results /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="about"><About /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Home;
