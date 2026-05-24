import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3 className="footer-logo">
            <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Toppers </span>
            <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Academy</span>
          </h3>
          <p className="footer-desc">
            Premium NEET coaching center in Tiruppur. We combine smart learning techniques, regular testing, and performance analysis for maximum NEET success.
          </p>
          <div className="social-links flex gap-2">
            <a 
              href="https://www.facebook.com/share/1DLPCnG4wr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              title="Follow us on Facebook"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/toppers_academy_tirupur?igsh=MXI5a3U1MHpseXdwZw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon" 
              title="Follow us on Instagram"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#courses">Courses Offered</a></li>
            <li><a href="#mind-dynamics">Mind Dynamics</a></li>
            <li><a href="#results">Results & Achievements</a></li>
            <li><a href="#testimonials">Student Testimonials</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            <li className="flex gap-1" style={{ display: 'flex', gap: '0.5rem' }}>
              <MapPin size={20} style={{ color: '#f59e0b', flexShrink: 0 }} />
              <span>A.V.P Layout, Gandhinagar, Velampalayam, Tiruppur, Tamil Nadu 641603</span>
            </li>
            <li className="flex gap-1 items-center" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Phone size={20} style={{ color: '#f59e0b', flexShrink: 0 }} />
              <span>+91 97888 12111</span>
            </li>
            <li className="flex gap-1 items-center" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Mail size={20} style={{ color: '#f59e0b', flexShrink: 0 }} />
              <span>toppersacademytup@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-center" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
          <span>&copy; {new Date().getFullYear()} Toppers Academy. All Rights Reserved.</span>
          <span style={{ fontSize: '0.85rem', opacity: '0.9', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: '#cbd5e1' }}>Developed by</span>
            <a href="https://www.linkedin.com/in/kungumapriyaa-m/" target="_blank" rel="noopener noreferrer" className="catchy-developer-text">Kungumapriyaa M</a>
            <span style={{ color: '#64748b' }}>•</span>
            <a href="mailto:kungumapriyaamkp5@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#f59e0b'} onMouseOut={(e) => e.target.style.color = '#cbd5e1'}>kungumapriyaamkp5@gmail.com</a>
            <div className="active-indicator" title="Currently Active">
              <span className="active-dot"></span>
              <span className="active-text">Active</span>
            </div>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
