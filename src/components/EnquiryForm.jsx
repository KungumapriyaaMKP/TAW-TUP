import { useState } from 'react';
import { Send } from 'lucide-react';
import './EnquiryForm.css';

const EnquiryForm = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    education: '',
    school: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*New Enquiry from Website*%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Course Interested:* ${formData.course}%0A
*Current Education:* ${formData.education}%0A
*School Name:* ${formData.school}`;

    // Redirect to WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919788812111&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`enquiry-card ${compact ? 'compact' : ''}`} id="enquiry">
      <div className="enquiry-header text-center">
        <h3 className="text-primary mb-1">Start Your Journey</h3>
        <p className="text-light text-sm">Join the best NEET coaching in Tiruppur</p>
      </div>

      <form onSubmit={handleSubmit} className="enquiry-form">
        <div className="input-group">
          <input 
            type="text" 
            name="name" 
            className="input-control" 
            placeholder="Student Name *" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="input-group">
          <input 
            type="tel" 
            name="phone" 
            className="input-control" 
            placeholder="Phone Number *" 
            required 
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <select 
            name="course" 
            className="input-control" 
            required
            value={formData.course}
            onChange={handleChange}
          >
            <option value="" disabled>Select Course *</option>
            <option value="NEET 11th Integrated">NEET 11th Integrated</option>
            <option value="NEET 12th Integrated">NEET 12th Integrated</option>
            <option value="NEET Repeaters Batch">NEET Repeaters Batch</option>
            <option value="NEET Re-Repeaters Batch">NEET Re-Repeaters Batch</option>
          </select>
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="education" 
            className="input-control" 
            placeholder="Current Education *" 
            required 
            value={formData.education}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="school" 
            className="input-control" 
            placeholder="School Name *" 
            required 
            value={formData.school}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit Enquiry <Send size={16} />
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
