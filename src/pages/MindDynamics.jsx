import { Brain, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const MindDynamics = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when out of view so it re-animates on next scroll
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 3D Roll animation styles
  const roll3DStyle = `
    @keyframes rollInLeft {
      0% {
        opacity: 0;
        transform: perspective(1000px) rotateY(-90deg) translateX(-100px);
      }
      40% {
        opacity: 0.6;
        transform: perspective(1000px) rotateY(-20deg) translateX(-30px);
      }
      70% {
        transform: perspective(1000px) rotateY(10deg) translateX(10px);
      }
      100% {
        opacity: 1;
        transform: perspective(1000px) rotateY(0deg) translateX(0);
      }
    }

    @keyframes rollInRight {
      0% {
        opacity: 0;
        transform: perspective(1000px) rotateY(90deg) translateX(100px);
      }
      40% {
        opacity: 0.6;
        transform: perspective(1000px) rotateY(20deg) translateX(30px);
      }
      70% {
        transform: perspective(1000px) rotateY(-10deg) translateX(-10px);
      }
      100% {
        opacity: 1;
        transform: perspective(1000px) rotateY(0deg) translateX(0);
      }
    }

    .md-roll-right {
      opacity: 0;
      transform: perspective(1000px) rotateY(90deg) translateX(100px);
      transition: none;
    }
    .md-roll-right.animate {
      animation: rollInRight 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
  `;

  return (
    <div className="section" ref={sectionRef} style={{
      background: 'linear-gradient(135deg, #2d3494 0%, #1e247a 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      perspective: '1200px'
    }}>
      <style>{roll3DStyle}</style>

      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(45, 52, 148, 0.2) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      <div className="container" style={{position: 'relative', zIndex: 1}}>
        <div className="text-center mb-4">
          <h1 style={{color: 'white'}}><span style={{color: '#0080ff'}}>Mind</span> Dynamics</h1>
          <p style={{color: '#94a3b8', maxWidth: '700px', margin: '0 auto'}}>
            Our unique technique to master complex concepts with ease.
          </p>
        </div>

        <div style={{display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center'}}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '3rem',
              borderRadius: '0',
              textAlign: 'left',
              borderLeft: '4px solid #0080ff'
            }}>
              <div className="flex items-center gap-1 mb-4">
                <Brain size={40} style={{color: '#0080ff'}} />
                <h2 style={{margin: 0, color: 'white', fontSize: '2rem'}}>What is Mind Dynamics?</h2>
              </div>
              <p style={{fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#cbd5e1', fontWeight: '300'}}>
                Mind Dynamics refers to specialized, scientifically proven techniques that teach you how to remember complex concepts quickly and easily. 
              </p>
              <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1', fontWeight: '300'}}>
                Using these methods, students can literally read and retain an entire textbook in a fraction of the usual time. It bridges the gap between hard work and smart work, ensuring lifelong memory retention.
              </p>
            </div>
          </div>
          
          <div 
            className={`md-roll-right ${isVisible ? 'animate' : ''}`}
            style={{flex: '0 0 340px', transformStyle: 'preserve-3d'}}
          >
            <div className="video-container-3d" style={{
              borderRadius: '28px', 
              overflow: 'hidden', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              border: '12px solid #1e293b',
              width: '320px',
              height: '570px',
              background: '#000'
            }}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/THbPQAA3pFY?autoplay=1&mute=1&loop=1&playlist=THbPQAA3pFY" 
                title="Mind Dynamics Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          </div>
        
        <div style={{textAlign: 'center', marginTop: '4rem'}}>
          <a href="#contact" className="btn" style={{backgroundColor: 'var(--accent-green)', color: 'white', padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '50px'}}>
            Enquire About Mind Dynamics <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MindDynamics;
