import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false
  });

  const testimonials = [
    {
      name: "Megavarshini Thiruppathisamy",
      college: "Dhanalakshmi Srinivasan Medical College",
      text: "I completed my NEET preparation at Topper's academy and currently pursuing MBBS... I am really grateful to this institution for guiding me.",
      rating: 5,
      type: "MBBS Seat 🩺"
    },
    {
      name: "Avantika G",
      college: "Nandha Medical College",
      text: "One of the best NEET coaching institutes. The teaching quality is outstanding, with strong conceptual clarity... Mind dynamics will help retain concepts.",
      rating: 5,
      type: "MBBS Seat 🩺"
    },
    {
      name: "ANANDHI V",
      college: "Stanley Medical College",
      text: "I got selected to Stanley Medical College, Chennai. I am very proud to be a part of Toppers Academy. The teaching is very supportive.",
      rating: 5,
      type: "MBBS Seat 🩺"
    },
    {
      name: "Subasri",
      college: "Government Medical College Kallakurichi",
      text: "I got seat in government medical college kallakurichi... I sincerely thank this academy for their excellent teaching and continues support.",
      rating: 5,
      type: "MBBS Seat 🩺"
    },
    {
      name: "Selvi.N",
      college: "Tirunelveli Medical College",
      text: "It was really a dream come true moment, Toppers academy helped me in getting this medical seat by guiding me.",
      rating: 5,
      type: "MBBS Seat 🩺"
    },
    {
      name: "Kumaravel N",
      college: "NEET Repeater",
      text: "I'm currently enrolled in the NEET Repeaters course... teachers are always available to clear our doubts. They are extremely friendly and supportive.",
      rating: 5,
      type: "NEET Success ⭐"
    },
    {
      name: "Pandeeswari govindan (Anitha)",
      college: "NEET Repeater",
      text: "Here, the teachers give individual attention to every student... The Mind Dynamics techniques have been incredibly helpful for memorization.",
      rating: 5,
      type: "NEET Success ⭐"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  const getStudentGradient = (index) => {
    const gradients = [
      'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', // Blue/Royal
      'linear-gradient(135deg, #10b981 0%, #047857 100%)', // Emerald/Teal
      'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', // Purple/Indigo
      'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', // Gold/Amber
      'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', // Pink/Crimson
      'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)', // Cyan/Sky
      'linear-gradient(135deg, #f97316 0%, #c2410c 100%)', // Orange/Amber
    ];
    return gradients[index % gradients.length];
  };

  const getCardStyles = (index) => {
    let offset = index - currentIndex;
    
    // Wrap around for circular list
    if (offset < -Math.floor(testimonials.length / 2)) {
      offset += testimonials.length;
    } else if (offset > Math.floor(testimonials.length / 2)) {
      offset -= testimonials.length;
    }

    const isActive = offset === 0;
    const isLeft = offset === -1;
    const isRight = offset === 1;

    let transform = 'scale(0.7) translateX(0) translateZ(0)';
    let opacity = 0;
    let zIndex = 0;
    let pointerEvents = 'none';

    if (screenSize.isMobile) {
      if (isActive) {
        transform = 'scale(1) translateX(0)';
        opacity = 1;
        zIndex = 10;
        pointerEvents = 'auto';
      } else {
        transform = `scale(0.8) translateX(${offset > 0 ? '120%' : '-120%'})`;
        opacity = 0;
        zIndex = 0;
        pointerEvents = 'none';
      }
    } else {
      if (isActive) {
        transform = 'scale(1) translateX(0) translateZ(0)';
        opacity = 1;
        zIndex = 10;
        pointerEvents = 'auto';
      } else if (isRight) {
        transform = 'scale(0.84) translateX(45%) rotate(3deg)';
        opacity = 0.45;
        zIndex = 5;
        pointerEvents = 'auto';
      } else if (isLeft) {
        transform = 'scale(0.8) translateX(-20%) rotate(-3deg)';
        opacity = 0;
        zIndex = 1;
        pointerEvents = 'none';
      }
    }

    return {
      transform,
      opacity,
      zIndex,
      pointerEvents,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'absolute',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      margin: 'auto',
      cursor: isRight ? 'pointer' : 'default',
    };
  };

  return (
    <div className="section" style={{
      background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '6.5rem 0',
      borderTop: '1px solid rgba(45, 52, 148, 0.04)'
    }}>
      {/* Decorative Blur Spheres */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(45, 52, 148, 0.03) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(45, 52, 148, 0.03) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* Inject custom keyframe styling */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatMobile3D {
          0% {
            transform: perspective(1200px) rotateY(14deg) rotateX(7deg) rotateZ(-1.5deg) translateY(0px);
            box-shadow: -15px 25px 40px rgba(15, 23, 148, 0.12), 0 0 0 1px rgba(15, 23, 148, 0.02);
          }
          50% {
            transform: perspective(1200px) rotateY(17deg) rotateX(10deg) rotateZ(-2.5deg) translateY(-12px);
            box-shadow: -25px 35px 50px rgba(15, 23, 148, 0.18), 0 0 0 1px rgba(15, 23, 148, 0.04);
          }
          100% {
            transform: perspective(1200px) rotateY(14deg) rotateX(7deg) rotateZ(-1.5deg) translateY(0px);
            box-shadow: -15px 25px 40px rgba(15, 23, 148, 0.12), 0 0 0 1px rgba(15, 23, 148, 0.02);
          }
        }
        .mobile-3d-frame {
          position: relative;
          width: 290px;
          height: 515px;
          background: #000;
          border-radius: 38px;
          border: 11px solid #1e293b;
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, box-shadow;
        }
        .mobile-screen-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 50%);
          pointer-events: none;
          z-index: 5;
          border-radius: 27px;
        }
        .mobile-button-left {
          position: absolute;
          left: -14px;
          top: 90px;
          width: 3px;
          height: 40px;
          background: #475569;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .mobile-button-left-2 {
          position: absolute;
          left: -14px;
          top: 140px;
          width: 3px;
          height: 40px;
          background: #475569;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .mobile-button-right {
          position: absolute;
          right: -14px;
          top: 110px;
          width: 3px;
          height: 60px;
          background: #475569;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        .animate-fade-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .testimonial-glow-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(45, 52, 148, 0.08);
          border-radius: 20px;
          box-shadow: 0 20px 40px -15px rgba(45, 52, 148, 0.12), 0 0 0 1px rgba(45, 52, 148, 0.03);
          transition: all 0.4s ease;
        }
        .testimonial-glow-card:hover {
          border-color: rgba(45, 52, 148, 0.2);
          box-shadow: 0 30px 50px -15px rgba(45, 52, 148, 0.18), 0 0 0 1px rgba(45, 52, 148, 0.05);
        }
      `}</style>

      <div className="container" style={{position: 'relative', zIndex: 1}}>
        {/* Header Stats Badge */}
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1.5rem'}}>
          <span style={{
            background: 'rgba(45, 52, 148, 0.06)',
            color: 'var(--primary-blue)',
            fontWeight: '600',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '0.5rem 1.25rem',
            borderRadius: '100px',
            border: '1px solid rgba(45, 52, 148, 0.1)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            💬 VOICE OF OUR ACHIEVERS
          </span>
        </div>

        <div className="text-center mb-5">
          <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>
            What Our <span style={{color: 'var(--primary-blue)', position: 'relative', display: 'inline-block'}}>
              Students Say
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
            Our students' success stands as our true medal. Discover their personal journeys of preparation and success in NEET with Toppers Academy.
          </p>
        </div>

        {/* Responsive Grid Structure */}
        <div style={{
          display: 'flex',
          flexDirection: screenSize.isMobile ? 'column' : 'row',
          gap: screenSize.isMobile ? '3rem' : '4rem',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '3rem'
        }}>
          
          {/* Left Column: 3D Mobile Video Screen Mockup */}
          <div 
            className={screenSize.isMobile ? "" : "mobile-3d-frame"}
            style={{
              flex: screenSize.isMobile ? '1' : '0 0 35%',
              width: screenSize.isMobile ? '100%' : '290px',
              height: screenSize.isMobile ? '515px' : '515px',
              maxWidth: '310px',
              borderRadius: '38px',
              overflow: 'hidden',
              background: '#000',
              border: '11px solid #1e293b',
              boxShadow: screenSize.isMobile ? '0 15px 30px rgba(0,0,0,0.15)' : undefined,
              animation: screenSize.isMobile ? 'none' : 'floatMobile3D 6s ease-in-out infinite',
              position: 'relative',
              margin: screenSize.isMobile ? '0 auto' : undefined
            }}
          >
            {/* Dynamic Island */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '0',
              right: '0',
              margin: 'auto',
              width: '70px',
              height: '16px',
              background: '#000',
              borderRadius: '100px',
              zIndex: 10
            }}></div>

            {/* Side bezel button accents */}
            {!screenSize.isMobile && (
              <>
                <div className="mobile-button-left"></div>
                <div className="mobile-button-left-2"></div>
                <div className="mobile-button-right"></div>
              </>
            )}

            {/* Screen shine reflection */}
            <div className="mobile-screen-shine"></div>

            {/* YouTube Shorts IFrame */}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/yDVB-qWnScg?autoplay=1&mute=1&loop=1&playlist=yDVB-qWnScg&controls=0&modestbranding=1&rel=0&iv_load_policy=3" 
              title="Toppers Academy Student Success Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              style={{
                borderRadius: '27px',
                border: 'none',
                width: '100%',
                height: '100%',
                display: 'block'
              }}
            ></iframe>
          </div>

          {/* Right Column: 3D Stack Slider */}
          <div style={{
            flex: screenSize.isMobile ? '1' : '0 0 60%',
            width: '100%',
            maxWidth: screenSize.isMobile ? '100%' : '680px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            
            {/* The 3D Slider Area */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: screenSize.isMobile ? '380px' : '420px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'visible'
            }}>
              {testimonials.map((t, index) => {
                const isActive = index === currentIndex;
                const isRight = index === ((currentIndex + 1) % testimonials.length);
                
                const styles = getCardStyles(index);

                return (
                  <div 
                    key={index} 
                    style={styles}
                    onClick={() => {
                      if (isRight) nextSlide();
                    }}
                    className={`testimonial-glow-card ${isActive ? 'active-slide' : ''}`}
                  >
                    <div style={{
                      padding: screenSize.isMobile ? '1.5rem 1.25rem' : '2.5rem 2.5rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Decorative giant quote mark inside the card */}
                      <span style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '20px',
                        fontSize: '9rem',
                        fontFamily: 'serif',
                        color: 'rgba(45, 52, 148, 0.035)',
                        lineHeight: '1',
                        pointerEvents: 'none',
                        userSelect: 'none'
                      }}>
                        “
                      </span>

                      {/* Top Row: Avatar & Seat Type Badge */}
                      <div style={{
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        zIndex: 1
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem'
                        }}>
                          {/* Student Initials Avatar */}
                          <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: getStudentGradient(index),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                            border: '2px solid white'
                          }}>
                            <span style={{
                              color: 'white',
                              fontWeight: 'bold',
                              fontSize: '1.05rem',
                              letterSpacing: '0.5px',
                              fontFamily: 'var(--font-body)'
                            }}>
                              {getInitials(t.name)}
                            </span>
                          </div>
                          
                          {/* Rating Stars */}
                          <div style={{display: 'flex', gap: '2px'}}>
                            {[...Array(t.rating)].map((_, i) => (
                              <Star key={i} size={15} fill="#f59e0b" stroke="none" />
                            ))}
                          </div>
                        </div>

                        {/* Top Badge for Success Category */}
                        <span style={{
                          background: t.type.includes('MBBS') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(45, 52, 148, 0.1)',
                          color: t.type.includes('MBBS') ? '#059669' : 'var(--primary-blue)',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '100px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: t.type.includes('MBBS') ? '1px solid rgba(16, 185, 129, 0.15)' : '1px solid rgba(45, 52, 148, 0.15)'
                        }}>
                          {t.type}
                        </span>
                      </div>

                      {/* Middle: Testimonial Quote Text */}
                      <p 
                        key={isActive ? currentIndex : undefined}
                        className={isActive ? 'animate-fade-up' : ''}
                        style={{
                          fontSize: screenSize.isMobile ? '0.95rem' : '1.05rem',
                          fontStyle: 'italic',
                          color: 'var(--text-dark)',
                          lineHeight: '1.6',
                          margin: '1.5rem 0',
                          fontFamily: 'var(--font-body)',
                          zIndex: 1,
                          flexGrow: 1,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        "{t.text}"
                      </p>

                      {/* Bottom Row: Student Name & College Info */}
                      <div 
                        key={isActive ? `author-${currentIndex}` : undefined}
                        className={isActive ? 'animate-fade-up' : ''}
                        style={{
                          borderTop: '1px solid #f1f5f9',
                          paddingTop: '1rem',
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                          zIndex: 1
                        }}
                      >
                        <h4 style={{
                          margin: '0', 
                          color: 'var(--primary-blue)', 
                          fontSize: '1.15rem',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 'bold'
                        }}>
                          {t.name}
                        </h4>
                        <span style={{
                          fontSize: '0.9rem', 
                          color: '#059669', 
                          fontWeight: '600',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}>
                          🎓 {t.college}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Pagination */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2rem',
              padding: '0 1rem'
            }}>
              <div style={{display: 'flex', gap: '0.4rem', alignItems: 'center'}}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    style={{
                      height: '8px',
                      borderRadius: '100px',
                      border: 'none',
                      background: i === currentIndex ? 'var(--primary-blue)' : '#cbd5e1',
                      width: i === currentIndex ? '24px' : '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    title={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Testimonials;
