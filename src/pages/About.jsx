import { Target, Lightbulb, Award, Users, GraduationCap, Brain, ArrowRight, Sparkles } from 'lucide-react';
import './About.css';
import galleryImg1 from '../assets/our gallery/2026-02-18.webp';
import galleryImg2 from '../assets/our gallery/unnamed (5).webp';

import facultyImg from '../assets/our gallery/WhatsApp Image 2021-10-23 at 10.58.11 AM.webp';
import booksImg from '../assets/books image.png';
import omrImg from '../assets/our gallery/omr.webp';
import mindDynamicsImg from '../assets/our gallery/mind dynamics.webp';
import foundationCoursesImg from '../assets/our gallery/foundation courses.webp';
import studentCentricImg from '../assets/our gallery/student centric environment.png';

const About = () => {
  const missionPoints = [
    "To provide high-quality NEET coaching with conceptual clarity.",
    "To build strong academic foundations in Physics, Chemistry, and Biology.",
    "To guide students with smart preparation strategies and regular assessments.",
    "To create disciplined, confident, and motivated NEET aspirants.",
    "To deliver consistent results through personalized mentoring and performance tracking."
  ];

  const features = [
    {
      title: "Expert NEET Coaching Faculty",
      desc: "Our experienced faculty members provide in-depth conceptual teaching aligned with the latest NEET syllabus and NTA exam pattern. We focus on simplifying complex topics and improving problem-solving speed and accuracy.",
      image: facultyImg
    },
    {
      title: "Structured Study Materials",
      desc: "TOPPERS ACADEMY provides well-designed study materials, chapter-wise notes, NEET question banks, MCQs, previous year question papers, and intensive revision modules for effective preparation.",
      image: booksImg
    },
    {
      title: "Regular NEET Mock Tests & Analysis",
      desc: "We conduct Weekly Tests, Grand Tests, Full-Length NEET Mock Exams, and Performance Analysis Sessions. These tests help students improve confidence, reduce exam fear, and master time management.",
      image: omrImg
    },
    {
      title: "Mind Dynamics",
      desc: "We utilize exclusive memory methods, scientific mnemonics, and mental focus techniques to teach students how to learn massive biological definitions and complex equations quickly and retain them forever.",
      image: mindDynamicsImg
    },
    {
      title: "Foundation Courses",
      desc: "We offer strong foundation programs for school students from lower classes aiming to build early preparation for NEET, JEE, Olympiads, and other competitive exams.",
      image: foundationCoursesImg
    },
    {
      title: "Hostel Facilities",
      desc: "We provide highly secure, comfortable, and disciplined hostel accommodations with separate facilities for girls and boys, featuring hygienic boarding and structured study hours.",
      image: studentCentricImg
    }
  ];

  return (
    <div className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="about-header text-center mb-5">
          <div className="about-header-badge">ESTABLISHED 2016</div>
          <h1>Toppers Academy - <span className="text-accent">NEET Coaching centre</span> in Tiruppur</h1>
          <p className="about-main-subtitle text-light">
            Toppers Academy - NEET Coaching centre in Tiruppur – Trusted Since 2016
          </p>
        </div>

        {/* Block A: Overlapping Images & Welcome Text */}
        <div className="about-hero-grid mb-5">
          
          {/* Left Column: Image Showcase */}
          <div className="about-image-showcase">
            <div className="about-image-wrapper primary-image-card">
              <img 
                src={galleryImg1} 
                alt="Smart Classes at Toppers Academy" 
                className="about-showcase-img"
                loading="lazy"
              />
              <div className="about-image-accent-glow"></div>
            </div>
            
            <div className="about-image-wrapper secondary-image-card">
              <img 
                src={galleryImg2} 
                alt="Students studying at Toppers Academy" 
                className="about-showcase-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Text & Stats */}
          <div className="about-intro-stack">
            <div className="about-intro-content">
              <span className="about-sub-label">WELCOME TO TOPPERS ACADEMY</span>
              <h2>Empowering Future Doctors Through Disciplined Guidance</h2>
              <p>
                Welcome to <strong>TOPPERS ACADEMY Tiruppur</strong>, one of the leading and result-oriented coaching institutes for <strong>NEET, Medical Entrance Exam Preparation, Foundation Courses, and Competitive Exam Training</strong> in Tiruppur. Established in 2016, our academy was founded with a clear mission to <strong>create future doctors</strong> through <strong>disciplined guidance, conceptual learning, and consistent mentorship</strong>.
              </p>
              <p>
                Over the years, TOPPERS ACADEMY has become a <strong>trusted name</strong> among students and parents searching for the <strong>best NEET coaching centre in Tiruppur</strong>. With a <strong>student-focused approach, experienced faculty team, structured study materials, regular mock tests, and personalized mentoring</strong>, we help students achieve <strong>academic excellence</strong> and secure admissions in <strong>top medical colleges across India</strong>.
              </p>
            </div>

            {/* Academic Stats Grid */}
            <div className="about-stats-grid">
              <div className="about-stat-badge">
                <div className="stat-icon-circle blue-glow">
                  <Award size={24} />
                </div>
                <div className="stat-details">
                  <h3>Since 2016</h3>
                  <p>Trusted Excellence</p>
                </div>
              </div>

              <div className="about-stat-badge">
                <div className="stat-icon-circle green-glow">
                  <Users size={24} />
                </div>
                <div className="stat-details">
                  <h3>1:1 Mentor</h3>
                  <p>Personal Guidance</p>
                </div>
              </div>

              <div className="about-stat-badge">
                <div className="stat-icon-circle gold-glow">
                  <GraduationCap size={24} />
                </div>
                <div className="stat-details">
                  <h3>Result-Oriented</h3>
                  <p>Proven Success</p>
                </div>
              </div>

              <div className="about-stat-badge">
                <div className="stat-icon-circle purple-glow">
                  <Brain size={24} />
                </div>
                <div className="stat-details">
                  <h3>Mind Dynamics</h3>
                  <p>Scientific Memory</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block B: Core Value Cards (Mission & Vision Grid) */}
        <div className="about-grid mb-5">
          {/* Our Mission Card */}
          <div className="about-premium-card about-mission-card">
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <div className="about-card-icon-wrapper">
                <Target size={28} />
              </div>
              <h2>Our Mission</h2>
            </div>
            <ul className="about-list">
              {missionPoints.map((point, index) => (
                <li key={index} className="about-list-item">
                  <span className="about-list-check">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Vision Card */}
          <div className="about-premium-card about-vision-card">
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <div className="about-card-icon-wrapper">
                <Lightbulb size={28} />
              </div>
              <h2>Our Vision</h2>
            </div>
            <div className="about-vision-text">
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', margin: '2rem 0 0 0' }}>
                To become the most trusted and innovative medical entrance coaching academy in Tamil Nadu, empowering students from every background to achieve their dream of becoming successful doctors and healthcare professionals.
              </p>
              <div style={{ marginTop: '2.5rem', background: 'rgba(16, 185, 129, 0.04)', borderLeft: '4px solid #10b981', padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Sparkles size={20} style={{ color: '#10b981' }} />
                <span style={{ fontWeight: '600', color: '#065f46', fontSize: '0.9rem' }}>Empowering Future Doctors Since 2016</span>
              </div>
            </div>
          </div>
        </div>

        {/* Block C: Why Choose Toppers Academy (Features Grid) */}
        <div className="about-pillars-section mb-5" style={{ background: '#f8fafc', border: '1px solid rgba(45, 52, 148, 0.04)' }}>
          <div className="about-pillars-header text-center mb-5" style={{ textAlign: 'center', width: '100%' }}>
            <span className="about-sub-label">WHY TOPPERS ACADEMY</span>
            <h2 style={{ textAlign: 'center' }}>Why Students Choose TOPPERS ACADEMY Tiruppur</h2>
          </div>
          
          <div className="about-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.2rem' }}>
            {features.map((f, i) => (
              <div className="about-pillar-card" key={i} style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {f.image ? (
                  <div className="pillar-card-image-box">
                    <img src={f.image} alt={f.title} className="pillar-card-image" loading="lazy" />
                  </div>
                ) : (
                  <div className="pillar-icon-box">
                    {f.icon}
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3>{f.title}</h3>
                  <p style={{ flex: 1 }}>{f.desc}</p>
                  {f.title.includes("Mind Dynamics") && (
                    <a href="#mind-dynamics" className="pillar-link">
                      Click Here <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block D: Our Commitment & Direct Call-to-action */}
        <div className="about-premium-card" style={{
          background: 'linear-gradient(135deg, #2d3494 0%, #1e247a 100%)',
          color: 'white',
          padding: '4rem',
          textAlign: 'center',
          border: 'none',
          boxShadow: '0 20px 40px rgba(45, 52, 148, 0.15)'
        }}>
          <span style={{ color: '#38bdf8', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>OUR COMMITMENT</span>
          <h2 style={{ color: 'white', fontSize: '2.2rem', marginTop: '0.8rem', marginBottom: '1.2rem', fontFamily: 'var(--font-heading)' }}>
            Producing Outstanding NEET Results Since 2016
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '800px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Since 2016, TOPPERS ACADEMY Tiruppur has remained committed to producing outstanding NEET results and helping students achieve their medical career dreams. Our dedication, systematic coaching methodology, and student-first philosophy continue to inspire hundreds of aspirants every year.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ background: '#38bdf8', color: '#0f172a', fontWeight: '700', padding: '0.9rem 2.2rem', textDecoration: 'none', transition: 'all 0.3s ease', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Join TOPPERS ACADEMY Tiruppur <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
