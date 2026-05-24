import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import './FloatingActions.css';

const FloatingActions = () => {
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am Toppers AI. How can I help you today? You can ask about our courses, fees, or location.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  const toggleBot = () => setIsBotOpen(!isBotOpen);

  const processBotResponse = (text) => {
    setTimeout(() => {
      let botResponse = "Please contact our counseling team at +91 97888 12111 for direct admission assistance!";
      const lowerInput = text.toLowerCase().trim();
      
      if (lowerInput === 'hi' || lowerInput === 'hello' || lowerInput === 'hey' || lowerInput.startsWith('hi ') || lowerInput.startsWith('hello ')) {
        botResponse = "Hello! Welcome to Toppers Academy. I can help you with admissions, courses, repeater batches, Mind Dynamics memory techniques, physical location, hostel facilities, or fee structures. What would you like to know?";
      } else if (lowerInput.includes('fee') || lowerInput.includes('cost') || lowerInput.includes('price')) {
        botResponse = "Our fee structures are highly competitive and customized based on the batch (Integrated, Repeaters, or Foundation). We also offer scholarships for high-performing students. Please call our admission desk at +91 97888 12111 for exact details!";
      } else if (lowerInput.includes('course') || lowerInput.includes('syllabus') || lowerInput.includes('subjects')) {
        botResponse = "We offer premium result-oriented batches: 1) NEET 11th & 12th Integrated, 2) NEET Repeaters Batch, 3) NEET Re-Repeaters Batch, and 4) JEE Main & Advanced prep. All courses feature expert faculty and standard NCERT study materials.";
      } else if (lowerInput.includes('repeat') || lowerInput.includes('dropper')) {
        botResponse = "Our NEET Repeater & Re-Repeater batches are designed for maximum score improvements, featuring daily grand testing, full-length mock exams, and intensive 1-on-1 counseling support.";
      } else if (lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('where') || lowerInput.includes('map')) {
        botResponse = "Toppers Academy is centrally located at: A.V.P Layout, Gandhinagar, Velampalayam, Tiruppur, Tamil Nadu 641603. Drop by or call us to arrange a campus tour!";
      } else if (lowerInput.includes('mind dynamics') || lowerInput.includes('memory') || lowerInput.includes('remember')) {
        botResponse = "Mind Dynamics is our exclusive, scientifically-proven memory technique. We teach students how to memorize massive biology definitions, chemistry reactions, and physics formulas quickly and retain them forever!";
      } else if (lowerInput.includes('result') || lowerInput.includes('rank') || lowerInput.includes('topper') || lowerInput.includes('achievement')) {
        botResponse = "We have an outstanding track record of placing students in top government medical colleges! Our toppers like Vinotha, Akilandeswari, and others secured MBBS seats through our disciplined mentorship. Check our Results section on the page!";
      } else if (lowerInput.includes('hostel') || lowerInput.includes('stay') || lowerInput.includes('room') || lowerInput.includes('boarding')) {
        botResponse = "Yes, safe and comfortable hostel accommodations are available for long-term and repeater batch students coming from out of town. Separate facilities are provided for boys and girls with hygienic boarding.";
      } else if (lowerInput.includes('scholarship') || lowerInput.includes('discount') || lowerInput.includes('concession')) {
        botResponse = "Yes! Toppers Academy rewards meritorious students. We offer attractive scholarship concessions based on your previous NEET score or class 10/12 board marks. Talk to our counselors at +91 97888 12111!";
      } else if (lowerInput.includes('jee') || lowerInput.includes('engineering') || lowerInput.includes('iit')) {
        botResponse = "Yes, we provide specialized JEE Main & Advanced classes for engineering aspirants. Our sessions focus heavily on conceptual problem-solving, high-level physics/maths derivations, and rigorous practice schedules.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('number') || lowerInput.includes('call') || lowerInput.includes('whatsapp')) {
        botResponse = "You can connect with us directly by calling +91 97888 12111 or emailing us at toppersacademytup@gmail.com. You can also click the green WhatsApp float button on the bottom left to chat instantly!";
      } else if (lowerInput.includes('time') || lowerInput.includes('hour') || lowerInput.includes('when') || lowerInput.includes('open')) {
        botResponse = "Toppers Academy is open Monday to Saturday from 8:30 AM to 8:30 PM, and on Sundays from 10:00 AM to 4:00 PM.";
      } else if (lowerInput.includes('thank') || lowerInput.includes('thanks') || lowerInput.includes('great') || lowerInput.includes('good') || lowerInput.includes('nice')) {
        botResponse = "You're very welcome! I'm here to help. Let me know if you have any other questions about joining TOPPERS ACADEMY!";
      }
      
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 800);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages(prev => [...prev, { text: userText, sender: 'user' }]);
    setInputValue('');
    processBotResponse(userText);
  };

  const handleQuickClick = (text) => {
    setMessages(prev => [...prev, { text: text, sender: 'user' }]);
    processBotResponse(text);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isBotOpen]);

  return (
    <div className="floating-actions">
      {/* WhatsApp Button */}
      <div className="float-btn-wrapper">
        <span className="float-tooltip">Chat on WhatsApp</span>
        <a 
          href="https://wa.me/919788812111?text=Hello%20Toppers%20Academy,%20I%20would%20like%20to%20know%20more%20about%20your%20NEET%20coaching." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="float-btn whatsapp-btn"
        >
          <MessageCircle size={26} />
          <span className="pulse-wave"></span>
        </a>
      </div>

      {/* AI Bot Button */}
      <div className="float-btn-wrapper">
        <span className="float-tooltip">{isBotOpen ? "Close Support Bot" : "Chat with Toppers AI"}</span>
        <button className="float-btn ai-bot-btn" onClick={toggleBot}>
          {isBotOpen ? <X size={26} /> : <Bot size={26} />}
        </button>
      </div>

      {/* AI Chat Window */}
      <div className={`chat-window ${isBotOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="flex items-center gap-1">
            <Bot size={20} />
            <span className="font-bold">Toppers AI</span>
          </div>
          <button onClick={toggleBot} className="close-chat"><X size={20} /></button>
        </div>
        
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Reply Chips */}
        <div className="quick-chips">
          <button type="button" onClick={() => handleQuickClick("What are the fee structures?")}>💰 Fees Info</button>
          <button type="button" onClick={() => handleQuickClick("What courses do you offer?")}>📚 Courses</button>
          <button type="button" onClick={() => handleQuickClick("Where is Toppers Academy located?")}>📍 Location</button>
          <button type="button" onClick={() => handleQuickClick("Tell me about Mind Dynamics")}>🧠 Mind Dynamics</button>
        </div>

        <form className="chat-footer" onSubmit={handleSendMessage}>
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="send-btn"><Send size={18} /></button>
        </form>
      </div>
    </div>
  );
};

export default FloatingActions;
