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

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    // Simulate bot response based on keywords
    setTimeout(() => {
      let botResponse = "Please contact our office at +91 97888 12111 for more specific details.";
      const lowerInput = inputValue.toLowerCase();
      
      if (lowerInput.includes('fee') || lowerInput.includes('cost')) {
        botResponse = "Our fee structure varies by course. Please use the Enquiry Form or call +91 97888 12111 for accurate pricing.";
      } else if (lowerInput.includes('course') || lowerInput.includes('neet')) {
        botResponse = "We offer NEET 11th & 12th integrated, repeaters, and re-repeaters batches. Books and syllabus are provided.";
      } else if (lowerInput.includes('location') || lowerInput.includes('address')) {
        botResponse = "We are located at AVP Layout, Gandhinagar, Velampalayam, Tiruppur.";
      } else if (lowerInput.includes('mind dynamics')) {
        botResponse = "Mind Dynamics is our unique technique that teaches memory strategies to learn complex subjects quickly!";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
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
