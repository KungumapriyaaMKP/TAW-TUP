import EnquiryForm from '../components/EnquiryForm';
import { Brain } from 'lucide-react';

const MindDynamics = () => {
  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #2d3494 0%, #1e247a 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
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
                Mind Dynamics is nothing but specialized techniques that teach you how to remember complex things in a very easy and quick manner. 
              </p>
              <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#cbd5e1', fontWeight: '300'}}>
                Using these methods, students can literally read and retain a whole book in a fraction of the usual time. It bridges the gap between hard work and smart work, ensuring long-term retention.
              </p>
            </div>
          </div>
          
          <div style={{flex: '0 0 315px'}}>
            <div className="video-container-3d" style={{
              borderRadius: '24px', 
              overflow: 'hidden', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              border: '10px solid #1e293b',
              width: '315px',
              height: '560px',
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
      </div>
    </div>
  );
};

export default MindDynamics;
