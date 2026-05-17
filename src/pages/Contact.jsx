import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    education: '',
    school: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear field-specific error as student types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    
    // Student Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Student Name is required";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters long";
    }
    
    // Phone Number validation (10-digit Indian mobile number format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      tempErrors.phone = "Enter a valid 10-digit mobile number (e.g. 9876543210)";
    }
    
    // Course select dropdown validation
    if (!formData.course) {
      tempErrors.course = "Please select a course preferred";
    }
    
    // Current Education validation
    if (!formData.education.trim()) {
      tempErrors.education = "Current Education is required";
    }
    
    // School Name validation
    if (!formData.school.trim()) {
      tempErrors.school = "School Name is required";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Format message for WhatsApp
      const message = `*New Admission Enquiry from Website*%0A
*Student Name:* ${formData.name}%0A
*Phone Number:* ${formData.phone}%0A
*Course Preferred:* ${formData.course}%0A
*Current Education:* ${formData.education}%0A
*School Name:* ${formData.school}`;

      // Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/919788812111?text=${message}`;
      window.open(whatsappUrl, '_blank');
      
      // Clear form states on redirect
      setFormData({
        name: '',
        phone: '',
        course: '',
        education: '',
        school: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-section">
      <div className="container">
        
        {/* 2-Column Info & Form Grid Layout */}
        <div className="contact-grid">
          
          {/* Left Column: Get In Touch Details */}
          <div className="contact-info-column">
            <h1 className="contact-title-exact">Get In Touch</h1>
            <p className="contact-lead-desc">
              Ready to elevate your NEET preparation with our premium coaching? Contact us today for a personalized strategy or enrollment inquiries.
            </p>

            <div className="contact-info-list">
              
              <div className="contact-info-row-exact">
                <div className="contact-icon-circle-exact">
                  <MapPin size={20} />
                </div>
                <div className="contact-details-exact">
                  <h4>Office Location</h4>
                  <p>AVP Layout, A.V.P Layout, Gandhinagar, Velampalayam, Tiruppur, Tamil Nadu 641603</p>
                </div>
              </div>

              <div className="contact-info-row-exact">
                <div className="contact-icon-circle-exact">
                  <Mail size={20} />
                </div>
                <div className="contact-details-exact">
                  <h4>Email Us</h4>
                  <p>info@toppersacademy.in</p>
                </div>
              </div>

              <div className="contact-info-row-exact">
                <div className="contact-icon-circle-exact">
                  <Phone size={20} />
                </div>
                <div className="contact-details-exact">
                  <h4>Call Us</h4>
                  <p>+91 97888 12111</p>
                </div>
              </div>

            </div>

            {/* End of Left Column Info Coordinates */}

          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="contact-form-exact" noValidate>
              
              {/* Row 1: Student Name & Phone Number */}
              <div className="contact-form-row-2col">
                <div className="contact-input-wrapper-exact">
                  <input 
                    type="text" 
                    name="name" 
                    className={`contact-input-field ${errors.name ? 'contact-input-error' : ''}`} 
                    placeholder="Student Name" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="contact-error-text-exact">⚠ {errors.name}</span>}
                </div>

                <div className="contact-input-wrapper-exact">
                  <input 
                    type="tel" 
                    name="phone" 
                    className={`contact-input-field ${errors.phone ? 'contact-input-error' : ''}`} 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className="contact-error-text-exact">⚠ {errors.phone}</span>}
                </div>
              </div>

              {/* Row 2: Course Dropdown & Current Education */}
              <div className="contact-form-row-2col">
                <div className="contact-input-wrapper-exact">
                  <select 
                    name="course" 
                    className={`contact-input-field contact-select-field ${errors.course ? 'contact-input-error' : ''}`} 
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Course</option>
                    <option value="NEET 11th Integrated">NEET 11th Integrated</option>
                    <option value="NEET 12th Integrated">NEET 12th Integrated</option>
                    <option value="NEET Repeaters Batch">NEET Repeaters Batch</option>
                    <option value="NEET Re-Repeaters Batch">NEET Re-Repeaters Batch</option>
                  </select>
                  {errors.course && <span className="contact-error-text-exact">⚠ {errors.course}</span>}
                </div>

                <div className="contact-input-wrapper-exact">
                  <input 
                    type="text" 
                    name="education" 
                    className={`contact-input-field ${errors.education ? 'contact-input-error' : ''}`} 
                    placeholder="Current Education" 
                    value={formData.education}
                    onChange={handleChange}
                  />
                  {errors.education && <span className="contact-error-text-exact">⚠ {errors.education}</span>}
                </div>
              </div>

              {/* Row 3: School Name */}
              <div className="contact-form-row-1col">
                <div className="contact-input-wrapper-exact">
                  <input 
                    type="text" 
                    name="school" 
                    className={`contact-input-field ${errors.school ? 'contact-input-error' : ''}`} 
                    placeholder="School Name" 
                    value={formData.school}
                    onChange={handleChange}
                  />
                  {errors.school && <span className="contact-error-text-exact">⚠ {errors.school}</span>}
                </div>
              </div>

              {/* Row 4: Submit Send Button */}
              <button type="submit" className="contact-submit-button">
                SEND MESSAGE
              </button>

            </form>

            {/* Social Media Block Redesigned - Premium side-by-side badges directly below form */}
            <div className="contact-social-block-exact contact-social-right-exact">
              <span className="contact-social-label-exact">Follow Us</span>
              <div className="contact-social-badge-container">
                <a 
                  href="https://www.facebook.com/share/1DLPCnG4wr/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-social-badge-exact fb-badge" 
                  title="Follow us on Facebook"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/toppers_academy_tirupur?igsh=MXI5a3U1MHpseXdwZw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-social-badge-exact ig-badge" 
                  title="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Horizontal Google Map Section */}
        <div className="map-outer-frame">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.823908851493!2d77.31624276136199!3d11.131557099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907c0009188f5%3A0xc1f9719f69f45107!2sToppers%20Academy%20-%20NEET%20Coaching%20centre%20in%20Tiruppur!5e0!3m2!1sen!2sin!4v1715873212345!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Toppers Academy Location Map"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
