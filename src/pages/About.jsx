import { Target, Lightbulb, Award, Users, GraduationCap, Brain, BookOpen, ClipboardCheck } from 'lucide-react';
import './About.css';
import galleryImg1 from '../assets/our gallery/2026-02-18.webp';
import galleryImg2 from '../assets/our gallery/unnamed (5).webp';

const About = () => {
  const missionPoints = [
    "High-quality NEET coaching with strong conceptual clarity.",
    "Disciplined and highly motivating learning environment.",
    "Personal mentorship, guidance, and strategic preparation.",
    "Building confidence, consistency, and competitive spirit.",
    "Empowering students of all backgrounds to become doctors.",
    "Smart learning techniques, regular testing, and performance analysis."
  ];

  return (
    <div className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="about-header text-center mb-5">
          <div className="about-header-badge">ESTABLISHED PRESTIGE</div>
          <h1>About <span className="text-accent">Toppers Academy</span></h1>
          <p className="about-main-subtitle text-light">
            We are dedicated to transforming ambitious students into successful medical professionals through excellence in NEET coaching, disciplined learning, and personalized mentorship.
          </p>
        </div>

        {/* Block A: Overlapping Images & The Institution */}
        <div className="about-hero-grid mb-5">
          
          {/* Left Column: Multi-Layered Overlapping Glass Image Card */}
          <div className="about-image-showcase">
            <div className="about-image-wrapper primary-image-card">
              <img 
                src={galleryImg1} 
                alt="Smart Classes at Toppers Academy" 
                className="about-showcase-img"
              />
              <div className="about-image-accent-glow"></div>
            </div>
            
            <div className="about-image-wrapper secondary-image-card">
              <img 
                src={galleryImg2} 
                alt="Students at Toppers Academy" 
                className="about-showcase-img"
              />

            </div>
          </div>

          {/* Right Column: Corporate Description & Stats Grid */}
          <div className="about-intro-stack">
            <div className="about-intro-content">
              <span className="about-sub-label">WHO WE ARE</span>
              <h2>Empowering the Next Generation of Medical Leaders</h2>
              <p>
                At Toppers Academy, we believe that success in NEET is built on a foundation of absolute conceptual clarity, rigorous practice, and an indomitable self-belief. Located in the heart of Tirupur, we provide a structured pathway for students to navigate the competitive medical entrance ecosystem with confidence and grit.
              </p>
              <p>
                Our specialized coaching model is engineered to remove the intimidation from complex scientific topics, combining highly experienced faculty with advanced interactive smart learning tools and personalized doubt-solving setups.
              </p>
            </div>

            {/* Academic Stats Grid */}
            <div className="about-stats-grid">
              <div className="about-stat-badge">
                <div className="stat-icon-circle blue-glow">
                  <Award size={24} />
                </div>
                <div className="stat-details">
                  <h3>10+ Years</h3>
                  <p>Coaching Excellence</p>
                </div>
              </div>

              <div className="about-stat-badge">
                <div className="stat-icon-circle green-glow">
                  <Users size={24} />
                </div>
                <div className="stat-details">
                  <h3>500+ NEET</h3>
                  <p>MBBS Seats Secured</p>
                </div>
              </div>

              <div className="about-stat-badge">
                <div className="stat-icon-circle gold-glow">
                  <GraduationCap size={24} />
                </div>
                <div className="stat-details">
                  <h3>98% Success</h3>
                  <p>In Board Exams</p>
                </div>
              </div>

              <div className="about-stat-badge">
                <div className="stat-icon-circle purple-glow">
                  <Brain size={24} />
                </div>
                <div className="stat-details">
                  <h3>1:1 Mentor</h3>
                  <p>Personal Guidance</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Block B: Core Educational Pillars Showcase */}
        <div className="about-pillars-section mb-5">
          <div className="about-pillars-header text-center mb-4">
            <span className="about-sub-label">THE TOPPERS FORMULA</span>
            <h2>Our Core Educational Pillars</h2>
          </div>
          
          <div className="about-pillars-grid">
            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <BookOpen size={28} />
              </div>
              <h3>Conceptual Rigor</h3>
              <p>
                Building a flawless foundation in Physics, Chemistry, and Biology. We focus on deep concept assimilation, enabling students to crack complex application-based problems easily.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Brain size={28} />
              </div>
              <h3>Mind Dynamics</h3>
              <p>
                Utilizing exclusive memory methods, scientific mnemonics, and mental focus techniques. We teach students how to learn massive biological definitions and complex equations quickly and retain them forever.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <ClipboardCheck size={28} />
              </div>
              <h3>Mock Testing</h3>
              <p>
                Daily testing regimens combined with highly detailed performance tracking and mock OMR examinations. We simulate the high-pressure NEET environment to build confidence and speed.
              </p>
            </div>
          </div>
        </div>

        {/* Block C: Core Values (Mission & Vision Grid) */}
        <div className="about-grid">
          
          {/* Our Mission Card */}
          <div className="about-premium-card about-mission-card">
            <div className="flex items-center gap-1" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
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
            <div className="flex items-center gap-1" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <div className="about-card-icon-wrapper">
                <Lightbulb size={28} />
              </div>
              <h2>Our Vision</h2>
            </div>
            <div className="about-vision-text">
              <p>
                To become a leading educational institution that transforms ambitious students into successful medical professionals through excellence in NEET coaching, disciplined learning, innovative teaching methods, and value-based mentorship.
              </p>
              <p>
                We envision creating a generation of confident achievers who contribute positively to society through knowledge, dedication, and service.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
