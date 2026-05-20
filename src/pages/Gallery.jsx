import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      src: "/gallery/unnamed (4).webp",
      title: "Coaching Centre Building",
      category: "Infrastructure"
    },
    {
      src: "/gallery/unnamed (1).webp",
      title: "Enquiry Office",
      category: "Infrastructure"
    },
    {
      src: "/gallery/WhatsApp Image 2021-10-23 at 10.58.10 AM (1).webp",
      title: "Lift Access & Elevators",
      category: "Infrastructure"
    },
    {
      src: "/gallery/unnamed (3).webp",
      title: "Conceptual Classes",
      category: "Academics"
    },
    {
      src: "/gallery/smart classes.webp",
      title: "Smart Boards",
      category: "Infrastructure",
      position: "top"
    },
    {
      src: "/gallery/unnamed (2).webp",
      title: "Friendly Staff & Mentors",
      category: "Mentorship"
    },
    {
      src: "/gallery/WhatsApp Image 2021-10-23 at 10.58.11 AM.webp",
      title: "1:1 Doubt Solving Session",
      category: "Mentorship"
    },
    {
      src: "/gallery/2026-03-03.webp",
      title: "Personal Mentorship Cabin",
      category: "Mentorship"
    },
    {
      src: "/gallery/2025-12-13.webp",
      title: "Motivation Session",
      category: "Motivation"
    },
    {
      src: "/gallery/unnamed (5).webp",
      title: "Mind Dynamics Class",
      category: "Academics"
    },
    {
      src: "/gallery/2026-02-18.webp",
      title: "Inspirational Seminar",
      category: "Motivation"
    },
    {
      src: "/gallery/omr.webp",
      title: "Mock Tests",
      category: "Academics"
    }
  ];

  const categories = ['All', 'Infrastructure', 'Academics', 'Mentorship', 'Motivation'];

  // Filter items based on selected category
  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  // Lightbox handlers
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-section">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h1>Our <span className="text-accent">Gallery</span></h1>
          <p className="text-light" style={{maxWidth: '700px', margin: '0 auto'}}>
            Take a look at our excellent infrastructure, modern classrooms, and top-notch learning facilities.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setLightboxIndex(null); // Close lightbox on filter change
              }}
              className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-card"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="gallery-image"
                style={{ objectPosition: item.position || 'center' }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-badge">{item.category}</span>
                <h3 className="gallery-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Image Zoom Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div className="lightbox-modal" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button className="lightbox-close-btn" onClick={closeLightbox}>
                <X size={22} />
                <span>Close</span>
              </button>

              {/* Navigation Chevrons */}
              <button className="lightbox-nav-btn lightbox-prev" onClick={handlePrev} title="Previous Image">
                <ChevronLeft size={28} />
              </button>

              <img 
                src={filteredItems[lightboxIndex].src} 
                alt={filteredItems[lightboxIndex].title} 
                className="lightbox-image"
              />

              <button className="lightbox-nav-btn lightbox-next" onClick={handleNext} title="Next Image">
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Captions Info */}
            <div className="lightbox-caption">
              {filteredItems[lightboxIndex].title}
              <div className="lightbox-counter">
                {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
