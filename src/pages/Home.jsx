import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
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
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundBtn, setShowSoundBtn] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure it autoplays muted
    video.muted = true;
    video.play().catch(() => {});

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Scroll: mute when scrolled away, unmute when back at top
    const handleScroll = () => {
      if (!videoRef.current) return;
      if (window.scrollY > 300) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        // Only re-unmute if user had already interacted
        if (!showSoundBtn) {
          videoRef.current.muted = false;
          setIsMuted(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [showSoundBtn]);

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const handleSoundToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    if (!newMuted) {
      video.play().catch(() => { video.muted = true; setIsMuted(true); return; });
      setShowSoundBtn(false);
    }
    setIsMuted(newMuted);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            style={{ width: '100%', display: 'block' }}
          >
            <source src="/VID-20260220-WA0027 (1).mp4" type="video/mp4" />
          </video>

          {/* Top Video Overlay Widget */}
          <div className="hero-video-widget" onClick={handleSoundToggle} title={isMuted ? 'Click to turn on sound' : 'Click to mute'}>
            <span className="hero-video-time">{formatTime(currentTime)}</span>
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </div>
        </div>
      </section>



      {/* SPA Sections */}
      <div id="courses"><Courses /></div>
      
      {/* Catchy Urgency Admission Banner */}
      <div className="admission-alert-banner">
        <div className="banner-pulse-dot"></div>
        <div className="banner-message">
          <strong>📢 URGENT ADMISSION NOTICE:</strong> Yearly intake is strictly limited to <strong>100 seats only</strong> to maintain our high-focus premium coaching standards. Batch 2027 seats are filling fast!
        </div>
        <a href="#contact" className="banner-btn">ENQUIRE NOW</a>
      </div>

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

