import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import { ArrowRight, Target, Zap, Award } from 'lucide-react';
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

      {/* Features Section */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Why Choose Toppers Academy?</h2>
            <p className="text-light">We provide a disciplined and motivating learning environment.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Target size={48} strokeWidth={1.5} /></div>
              <h3>Strong Concepts</h3>
              <p>In-depth conceptual clarity tailored specifically for NEET and JEE syllabuses.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Zap size={48} strokeWidth={1.5} /></div>
              <h3>Mind Dynamics</h3>
              <p>Exclusive memory techniques to help you learn complex subjects easily and quickly.</p>
              <Link to="/mind-dynamics" className="feature-link">Learn More <ArrowRight size={16}/></Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Award size={48} strokeWidth={1.5} /></div>
              <h3>Proven Results</h3>
              <p>Continuous evaluation and performance analysis that yield real government medical seats.</p>
            </div>
          </div>
        </div>
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
