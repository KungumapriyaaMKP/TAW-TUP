import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "What courses does Toppers Academy offer?",
      answer: "We offer specialized batches including NEET 11th & 12th Integrated, NEET Repeaters Batch, NEET Re-Repeaters Batch, and comprehensive JEE Main & Advanced preparation programs."
    },
    {
      question: "Are there separate hostel facilities for boys and girls?",
      answer: "Yes, we provide highly secure, comfortable, and disciplined hostel accommodations with completely separate facilities for girls and boys, featuring hygienic boarding and structured study hours."
    },
    {
      question: "What is 'Mind Dynamics'?",
      answer: "Mind Dynamics is our exclusive, scientifically-proven memory technique. We teach students how to memorize massive biology definitions, complex chemistry reactions, and physics formulas quickly and retain them forever."
    },
    {
      question: "Do you offer scholarships or fee concessions?",
      answer: "Yes, Toppers Academy rewards meritorious students. We offer attractive scholarship concessions based on your previous NEET score or Class 10/12 board marks."
    },
    {
      question: "How do you track and improve student performance?",
      answer: "We conduct Weekly Tests, Grand Tests, and Full-Length NEET Mock Exams. After each test, we hold dedicated performance analysis sessions and provide parent performance updates."
    },
    {
      question: "What is the yearly intake for the academy?",
      answer: "To ensure high-focus, premium coaching and personalized attention for every student, our yearly intake is strictly limited to 100 seats per batch."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header text-center mb-5">
          <h2 className="section-title">Frequently Asked <span className="text-accent">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about joining Toppers Academy.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="faq-icon" size={20} />
                ) : (
                  <ChevronDown className="faq-icon" size={20} />
                )}
              </button>
              <div 
                className="faq-answer-wrapper"
                style={{ 
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
