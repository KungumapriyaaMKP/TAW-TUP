import { useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import results2024 from '../assets/results/2024.jpg';
import results2023 from '../assets/results/2023.jpeg';

const Results = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const resultsData = [
    {
      year: "2025",
      badge: "🏆 HISTORIC MILESTONE",
      themeColor: "#2d3494", // Royal Blue
      accentColor: "rgba(45, 52, 148, 0.06)",
      topper: {
        name: "ANANDHI V",
        score: "705 / 720",
        rank: "AIR 45",
        college: "Stanley Medical College, Chennai 🩺",
        image: "/topper_2025.png",
        quote: "Toppers Academy provided me with exact coaching. The dynamic memory techniques and conceptual classes made NEET extremely easy to clear!"
      },
      achievers: [
        { name: "Dharshini K", score: "685/720", college: "Madras Medical College" },
        { name: "Pranesh Kumar R", score: "672/720", college: "Coimbatore Medical College" },
        { name: "Subasri S", score: "660/720", college: "GMC Kallakurichi" },
        { name: "Hari Prasath M", score: "652/720", college: "Kilpauk Medical College" }
      ]
    },
    {
      year: "2024",
      badge: "⭐ RECORD-BREAKING SEATS",
      themeColor: "#10b981", // Green
      accentColor: "rgba(16, 185, 129, 0.06)",
      topper: {
        name: "Megavarshini Thiruppathisamy",
        score: "695 / 720",
        rank: "AIR 112",
        college: "Dhanalakshmi Srinivasan Medical College 🩺",
        image: results2024,
        quote: "Getting a government medical seat was my ultimate goal. The supportive mentors, 1:1 doubts solving, and systematic OMR tests helped me succeed!"
      },
      achievers: [
        { name: "Kavya Shree S", score: "678/720", college: "Stanley Medical College" },
        { name: "Selvi N", score: "665/720", college: "Tirunelveli Medical College" },
        { name: "Rithanya G", score: "655/720", college: "Madurai Medical College" },
        { name: "Gokul Raj V", score: "648/720", college: "Coimbatore Medical College" }
      ]
    },
    {
      year: "2023",
      badge: "🎓 EXCEPTIONAL ACHIEVEMENTS",
      themeColor: "#9333ea",
      accentColor: "rgba(147, 51, 234, 0.06)",
      topper: {
        name: "",
        score: "",
        rank: "",
        college: "",
        image: results2023,
        quote: ""
      },
      achievers: []
    }
  ];

  const handleNext = () => {
    setActiveYearIndex((prev) => (prev + 1) % resultsData.length);
  };

  const handlePrev = () => {
    setActiveYearIndex((prev) => (prev - 1 + resultsData.length) % resultsData.length);
  };

  const currentData = resultsData[activeYearIndex];

  return (
    <div className="section" style={{
      background: 'linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '6.5rem 0'
    }}>
      {/* Decorative Blur Spheres */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(45, 52, 148, 0.02) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      
      {/* Embedded CSS Styles */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .results-slide-container {
          animation: slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .results-year-tab {
          padding: 0.8rem 2rem;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #64748b;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 0 !important; /* Strict sharp corners */
          min-width: 140px;
          text-align: center;
        }

        .results-year-tab.active {
          color: white;
          border-color: var(--theme-color);
          background: var(--theme-color);
          box-shadow: 0 10px 20px -5px var(--shadow-color);
        }

        .results-year-tab:hover:not(.active) {
          border-color: #94a3b8;
          color: #334155;
          transform: translateY(-2px);
        }

        .results-topper-card {
          background: #ffffff;
          border: 1px solid rgba(45, 52, 148, 0.08);
          box-shadow: 0 20px 45px -12px rgba(15, 23, 42, 0.12);
          display: grid;
          grid-template-columns: 42% 58%;
          overflow: hidden;
          transition: all 0.4s ease;
          border-radius: 0 !important;
        }

        .results-topper-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px -15px rgba(45, 52, 148, 0.18);
        }

        .results-topper-img-wrapper {
          position: relative;
          height: 100%;
          min-height: 380px;
          background: #f8fafc;
        }

        .results-topper-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .results-topper-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          padding: 0.4rem 0.9rem;
          color: white;
          background: var(--theme-color);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 1.5px;
          border-radius: 0 !important;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .results-topper-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .results-topper-name {
          font-size: 2rem;
          color: var(--primary-blue);
          margin-top: 0;
          margin-bottom: 0.4rem;
          font-family: var(--font-heading);
          font-weight: 800;
        }

        .results-topper-score-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .results-score-pill {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--theme-color);
          background: var(--accent-color);
          padding: 0.4rem 1.2rem;
          border-left: 4px solid var(--theme-color);
          font-family: var(--font-heading);
        }

        .results-rank-pill {
          font-size: 0.9rem;
          font-weight: 700;
          color: #d97706;
          background: rgba(217, 119, 6, 0.08);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .results-topper-college {
          font-size: 1.05rem;
          font-weight: 700;
          color: #10b981;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .results-topper-quote {
          font-style: italic;
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
          font-family: var(--font-body);
          border-left: 3px solid #cbd5e1;
          padding-left: 1rem;
          font-size: 0.95rem;
        }

        .results-grid-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          color: var(--primary-blue);
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-weight: 700;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.6rem;
        }

        .results-other-achievers {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .results-achiever-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.5rem;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          border-radius: 0 !important;
        }

        .results-achiever-row:hover {
          transform: translateX(6px);
          border-color: var(--theme-color);
          box-shadow: 0 8px 20px -8px rgba(45, 52, 148, 0.15);
        }

        .results-achiever-name-col h4 {
          margin: 0;
          font-size: 1.05rem;
          color: var(--primary-blue);
          font-family: var(--font-heading);
        }

        .results-achiever-name-col p {
          margin: 0.1rem 0 0 0;
          font-size: 0.82rem;
          color: #64748b;
          font-weight: 600;
        }

        .results-achiever-score {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--theme-color);
          font-family: var(--font-heading);
        }

        .results-slide-nav-btn {
          width: 50px;
          height: 50px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          border-radius: 0 !important;
        }

        .results-slide-nav-btn:hover {
          background: var(--primary-blue);
          color: #ffffff;
          border-color: var(--primary-blue);
          transform: scale(1.08);
          box-shadow: 0 8px 20px rgba(45, 52, 148, 0.15);
        }

        @media (max-width: 1024px) {
          .results-slide-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .results-topper-card {
            grid-template-columns: 1fr;
          }
          .results-topper-img-wrapper {
            min-height: 300px;
            height: 320px;
          }
        }

        @media (max-width: 768px) {
          .results-tabs-wrapper {
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
          }
          .results-year-tab {
            min-width: 100px;
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
          .results-topper-content {
            padding: 1.5rem;
          }
          .results-topper-name {
            font-size: 1.6rem;
          }
          .results-score-pill {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="container" style={{position: 'relative', zIndex: 1}}>
        
        {/* Title Badging */}
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1.5rem'}}>
          <span style={{
            background: 'rgba(45, 52, 148, 0.05)',
            color: 'var(--primary-blue)',
            fontWeight: '700',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '0.5rem 1.25rem',
            borderLeft: '3px solid var(--primary-blue)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Trophy size={16} /> ANNUAL NEET RANKS SHOWCASE
          </span>
        </div>

        <div className="text-center mb-5">
          <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>
            Our Stellar <span style={{color: 'var(--primary-blue)', position: 'relative', display: 'inline-block'}}>
              Results
              <span style={{
                position: 'absolute',
                bottom: '4px',
                left: '0',
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, var(--primary-blue), transparent)',
                borderRadius: '2px'
              }}></span>
            </span>
          </h1>
          <p style={{
            color: 'var(--text-light)',
            fontSize: '1.15rem',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Every year, our students break records and secure coveted government medical seats. Explore our year-wise topper profiles and outstanding college placements.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="results-tabs-wrapper" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.2rem',
          marginBottom: '3.5rem'
        }}>
          {resultsData.map((data, index) => (
            <button
              key={data.year}
              onClick={() => setActiveYearIndex(index)}
              className={`results-year-tab ${activeYearIndex === index ? 'active' : ''}`}
              style={{
                '--theme-color': data.themeColor,
                '--shadow-color': data.themeColor + '40'
              }}
            >
              {data.year} Results
            </button>
          ))}
        </div>

        {/* Dynamic Slide Container */}
        {(() => {
          const imageOnlyYears = new Set(['2023', '2024']);
          const isImageOnlyYear = imageOnlyYears.has(currentData.year);
          return (
            <div
              key={activeYearIndex}
              className="results-slide-container"
              style={{
                display: 'grid',
                gridTemplateColumns: isImageOnlyYear ? '1fr' : '55% 45%',
                gap: isImageOnlyYear ? '1rem' : '3.5rem',
                alignItems: 'start'
              }}
            >
              {isImageOnlyYear ? (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <div style={{maxWidth: 560, width: '100%'}}>
                    <img
                      src={currentData.topper.image}
                      alt={currentData.topper.name || 'Results 2023'}
                      loading="lazy"
                      style={{width: '100%', height: 'auto', display: 'block'}}
                    />
                  </div>
                </div>
              ) : (
                <>
                  {/* Left Side: Topper Profile Showcase */}
                  <div>
                    <h3 className="results-grid-title">🔬 The Year's Supreme Topper</h3>
                    <div
                      className="results-topper-card"
                      style={{ '--theme-color': currentData.themeColor, '--accent-color': currentData.accentColor }}
                    >
                      <div className="results-topper-img-wrapper">
                        <img src={currentData.topper.image} alt={currentData.topper.name} className="results-topper-img" loading="lazy" />
                        <div className="results-topper-badge">{currentData.badge}</div>
                      </div>
                      <div className="results-topper-content">
                        <h4 className="results-topper-name">{currentData.topper.name}</h4>
                        <div className="results-topper-score-row">
                          <div className="results-score-pill">Score: {currentData.topper.score}</div>
                          <div className="results-rank-pill"><Award size={16} /> {currentData.topper.rank}</div>
                        </div>
                        <div className="results-topper-college">🎓 {currentData.topper.college}</div>
                        <p className="results-topper-quote">"{currentData.topper.quote}"</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Other High Achievers Grid */}
                  <div>
                    <h3 className="results-grid-title" style={{ '--theme-color': currentData.themeColor }}>🎉 Outstanding Placements</h3>
                    <div className="results-other-achievers" style={{ '--theme-color': currentData.themeColor }}>
                      {currentData.achievers.map((achiever, i) => (
                        <div key={i} className="results-achiever-row">
                          <div className="results-achiever-name-col">
                            <h4>{achiever.name}</h4>
                            <p>🎓 {achiever.college}</p>
                          </div>
                          <div className="results-achiever-score">{achiever.score}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })()}

        {/* Bottom Slide Navigation Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          marginTop: '3.5rem'
        }}>
          <button 
            onClick={handlePrev} 
            className="results-slide-nav-btn"
            title="Previous Year Results"
          >
            <ChevronLeft size={24} />
          </button>
          
          <span style={{
            fontSize: '1rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700',
            color: '#64748b'
          }}>
            Year {resultsData[(activeYearIndex - 1 + resultsData.length) % resultsData.length].year}
            <span style={{margin: '0 0.8rem', color: '#cbd5e1'}}>|</span>
            <strong style={{color: 'var(--primary-blue)', fontSize: '1.1rem'}}>{currentData.year} results</strong>
            <span style={{margin: '0 0.8rem', color: '#cbd5e1'}}>|</span>
            Year {resultsData[(activeYearIndex + 1) % resultsData.length].year}
          </span>

          <button 
            onClick={handleNext} 
            className="results-slide-nav-btn"
            title="Next Year Results"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Results;
