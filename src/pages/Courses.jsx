import { ArrowRight } from 'lucide-react';
import integratedImg from '../assets/course-integrated.png';
import repeatersImg from '../assets/course-repeaters.png';
import mentoringImg from '../assets/course-mentoring.png';
import jeeImg from '../assets/course-jee.png';

const Courses = () => {
  return (
    <div className="section bg-off-white">
      <div className="container">
        <div className="text-center mb-4">
          <h1>Our <span className="text-accent">Courses</span></h1>
          <p className="text-light" style={{maxWidth: '700px', margin: '0 auto'}}>
            Specialized coaching programs tailored for your NEET & JEE success.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '4rem'}}>
          {/* Course 1 */}
          <div className="feature-card" style={{aspectRatio: '1/1', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', justifyContent: 'space-between'}}>
            <div>
              <div style={{marginBottom: '1rem', width: '60px', height: '60px', margin: '0 auto 1rem auto'}}>
                <img src={integratedImg} alt="NEET Integrated" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              </div>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', minHeight: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>NEET 11th & 12th Integrated</h3>
            </div>
            <p className="text-light" style={{fontSize: '0.85rem', lineHeight: '1.4', margin: '0.5rem 0', flexGrow: 1, display: 'flex', alignItems: 'center'}}>Two-year program for board exams and NEET preparation simultaneously.</p>
            <a href="#contact" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0080ff', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem'}}>Enquire Now <ArrowRight size={14} /></a>
          </div>

          {/* Course 2 */}
          <div className="feature-card" style={{aspectRatio: '1/1', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', justifyContent: 'space-between'}}>
            <div>
              <div style={{marginBottom: '1rem', width: '60px', height: '60px', margin: '0 auto 1rem auto'}}>
                <img src={repeatersImg} alt="NEET Repeaters" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              </div>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', minHeight: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>NEET Repeaters Batch</h3>
            </div>
            <p className="text-light" style={{fontSize: '0.85rem', lineHeight: '1.4', margin: '0.5rem 0', flexGrow: 1, display: 'flex', alignItems: 'center'}}>Intensive one-year program focusing on rigorous testing and mind dynamics.</p>
            <a href="#contact" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0080ff', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem'}}>Enquire Now <ArrowRight size={14} /></a>
          </div>

          {/* Course 3 */}
          <div className="feature-card" style={{aspectRatio: '1/1', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', justifyContent: 'space-between'}}>
            <div>
              <div style={{marginBottom: '1rem', width: '60px', height: '60px', margin: '0 auto 1rem auto'}}>
                <img src={mentoringImg} alt="NEET Re-Repeaters" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              </div>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', minHeight: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>NEET Re-Repeaters Batch</h3>
            </div>
            <p className="text-light" style={{fontSize: '0.85rem', lineHeight: '1.4', margin: '0.5rem 0', flexGrow: 1, display: 'flex', alignItems: 'center'}}>Personalized mentoring to identify and fix specific weak areas from attempts.</p>
            <a href="#contact" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0080ff', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem'}}>Enquire Now <ArrowRight size={14} /></a>
          </div>

          {/* Course 4 */}
          <div className="feature-card" style={{aspectRatio: '1/1', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', justifyContent: 'space-between', border: '1px solid #0080ff'}}>
            <div>
              <div style={{marginBottom: '1rem', width: '60px', height: '60px', margin: '0 auto 1rem auto'}}>
                <img src={jeeImg} alt="JEE Main & Advanced" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              </div>
              <h3 style={{fontSize: '1.1rem', marginBottom: '0.5rem', minHeight: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>JEE Main & Advanced</h3>
            </div>
            <p className="text-light" style={{fontSize: '0.85rem', lineHeight: '1.4', margin: '0.5rem 0', flexGrow: 1, display: 'flex', alignItems: 'center'}}>Specialized coaching for engineering aspirants with problem-solving sessions.</p>
            <a href="#contact" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0080ff', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem'}}>Enquire Now <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
