import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  text: string;
  sender: 'bot' | 'user';
  id: number;
}

interface QualificationAnswers {
  [key: string]: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [conversationState, setConversationState] = useState('start');
  const [qualificationAnswers, setQualificationAnswers] = useState<QualificationAnswers>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [quickReplyOptions, setQuickReplyOptions] = useState<string[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  const faqs = {
    "What is SAM.gov?": "SAM.gov (System for Award Management) is the primary government system for entities to register to do business with the U.S. government, find contract opportunities, and more.",
    "What is the FAR?": "The Federal Acquisition Regulation (FAR) is the primary regulation for use by all executive agencies in their acquisition of supplies and services with appropriated funds. It's the rulebook for government contracting.",
    "What types of contracts does MAC specialize in?": "MAC specializes in navigating complex government contract types, particularly Firm-Fixed Price (F-F-P), Cost-Reimbursement, Time & Materials (T&M), and Labor Hour (LH) contracts, ensuring you understand the risks and requirements.",
    "How can MAC help with proposal writing?": "MAC provides insider insights on technical proposal writing, helping you avoid common pitfalls like generic submissions and ensuring your proposal directly addresses agency needs.",
    "How can MAC help with pricing?": "MAC offers expert guidance on precise cost proposal documentation, understanding contract types, and avoiding common pricing errors that lead to disqualification or reduced profits.",
    "What about compliance?": "MAC helps you navigate the 'small print' of compliance matrices, Section L, and Section M, ensuring your submissions are fully compliant and avoid outright rejection. We also advise on managing scope in personal services contracts."
  };

  const qualificationQuestions = [
    {
      id: 'goal',
      question: "To help me understand if a consultation with MAC is the right fit, could you tell me your primary goal with government contracting?",
      options: ["Win my first contract", "Improve proposal success", "Ensure compliance", "Manage current contracts", "Other (type below)"]
    },
    {
      id: 'revenue',
      question: "What is the approximate annual revenue of your business?",
      options: ["Under $1M", "$1M - $5M", "$5M - $25M", "Over $25M"]
    },
    {
      id: 'active',
      question: "Are you currently bidding on or actively managing government contracts?",
      options: ["Yes, actively bidding/managing", "No, just exploring/starting out"]
    },
    {
      id: 'area',
      question: "What specific area of government contracting are you seeking assistance with?",
      options: ["Proposal Writing (Technical)", "Cost/Price Proposals", "Contract Compliance", "Negotiation/Strategy", "Post-Award Management", "Other (type below)"]
    }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startNewConversation();
    }
  }, [isOpen]);

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    setMessages(prev => [...prev, { text, sender, id: messageIdRef.current++ }]);
  };

  const startNewConversation = () => {
    setMessages([]);
    setConversationState('start');
    setQualificationAnswers({});
    setCurrentQuestionIndex(0);
    setShowContactForm(false);
    addMessage("Hi there! I'm MAC's AI assistant. How can I help you today?", 'bot');
    setQuickReplyOptions(["I have a question about government contracting.", "I'm interested in a consultation with MAC.", "Tell me more about the free ebook/webinar."]);
    setShowQuickReplies(true);
  };

  const handleQuickReply = (option: string) => {
    handleUserInput(option, true);
  };

  const handleUserInput = (message: string, isQuickReply = false) => {
    if (!isQuickReply && userInput.trim() === '') return;

    const userText = isQuickReply ? message : userInput.trim();
    addMessage(userText, 'user');
    setUserInput('');

    switch (conversationState) {
      case 'start':
        if (userText.toLowerCase().includes("question") || userText.toLowerCase().includes("faq")) {
          setConversationState('faq_menu');
          const faqOptions = Object.keys(faqs);
          addMessage("Great! Here are some common questions I can answer:", 'bot');
          setQuickReplyOptions([...faqOptions, "Something else (type below)", "Back to main menu"]);
          setShowQuickReplies(true);
        } else if (userText.toLowerCase().includes("consultation") || userText.toLowerCase().includes("talk to mac")) {
          setConversationState('qualify');
          setCurrentQuestionIndex(0);
          addMessage(qualificationQuestions[0].question, 'bot');
          setQuickReplyOptions(qualificationQuestions[0].options);
          setShowQuickReplies(true);
        } else if (userText.toLowerCase().includes("ebook") || userText.toLowerCase().includes("webinar") || userText.toLowerCase().includes("free guide")) {
          addMessage("The free ebook 'Avoid the Top 3 Costly Government Contracting Mistakes' comes with a FREE seat to our exclusive webinar 'Mastering Government Submissions: Insider Secrets to Avoid Disqualification & Win More Contracts' (a $1500 value!). Simply fill out the form on the landing page to get both.", 'bot');
          setQuickReplyOptions(["I have a question about government contracting.", "I'm interested in a consultation with MAC."]);
          setShowQuickReplies(true);
        } else {
          addMessage("I'm sorry, I didn't quite understand that. Please choose one of the options below or type 'question' or 'consultation'.", 'bot');
          setQuickReplyOptions(["I have a question about government contracting.", "I'm interested in a consultation with MAC.", "Tell me more about the free ebook/webinar."]);
          setShowQuickReplies(true);
        }
        break;

      case 'faq_menu':
        if (faqs[userText as keyof typeof faqs]) {
          addMessage(faqs[userText as keyof typeof faqs], 'bot');
          addMessage("Is there anything else I can help you with?", 'bot');
          const faqOptions = Object.keys(faqs);
          setQuickReplyOptions([...faqOptions, "Something else (type below)", "Back to main menu"]);
          setShowQuickReplies(true);
        } else if (userText.toLowerCase().includes("something else")) {
          setShowQuickReplies(false);
          addMessage("Please type your question, and I'll do my best to answer.", 'bot');
          setConversationState('faq_free_text');
        } else if (userText.toLowerCase().includes("back to main menu")) {
          addMessage("No problem! How can I help you now?", 'bot');
          setConversationState('start');
          setQuickReplyOptions(["I have a question about government contracting.", "I'm interested in a consultation with MAC.", "Tell me more about the free ebook/webinar."]);
          setShowQuickReplies(true);
        } else {
          addMessage("I can answer questions about SAM.gov, FAR, contract types, proposal writing, pricing, and compliance. Please choose from the options or type 'something else'.", 'bot');
          const faqOptions = Object.keys(faqs);
          setQuickReplyOptions([...faqOptions, "Something else (type below)", "Back to main menu"]);
          setShowQuickReplies(true);
        }
        break;

      case 'faq_free_text':
        addMessage("Thanks for your question. While I can answer common FAQs, for detailed or specific inquiries, it's best to consult directly with MAC. Would you like to request a consultation?", 'bot');
        setQuickReplyOptions(["Yes, request consultation", "No, back to main menu"]);
        setShowQuickReplies(true);
        setConversationState('faq_free_text_followup');
        break;

      case 'faq_free_text_followup':
        if (userText.toLowerCase().includes("yes")) {
          setConversationState('qualify');
          setCurrentQuestionIndex(0);
          addMessage(qualificationQuestions[0].question, 'bot');
          setQuickReplyOptions(qualificationQuestions[0].options);
          setShowQuickReplies(true);
        } else if (userText.toLowerCase().includes("no")) {
          addMessage("No problem! How can I help you now?", 'bot');
          setConversationState('start');
          setQuickReplyOptions(["I have a question about government contracting.", "I'm interested in a consultation with MAC.", "Tell me more about the free ebook/webinar."]);
          setShowQuickReplies(true);
        } else {
          addMessage("Please choose 'Yes, request consultation' or 'No, back to main menu'.", 'bot');
          setQuickReplyOptions(["Yes, request consultation", "No, back to main menu"]);
          setShowQuickReplies(true);
        }
        break;

      case 'qualify':
        const newAnswers = { ...qualificationAnswers };
        newAnswers[qualificationQuestions[currentQuestionIndex].id] = userText;
        setQualificationAnswers(newAnswers);
        
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);

        if (nextIndex < qualificationQuestions.length) {
          addMessage(qualificationQuestions[nextIndex].question, 'bot');
          setQuickReplyOptions(qualificationQuestions[nextIndex].options);
          setShowQuickReplies(true);
        } else {
          setShowQuickReplies(false);
          evaluateQualification(newAnswers);
        }
        break;
    }
  };

  const evaluateQualification = (answers: QualificationAnswers) => {
    const revenue = answers.revenue;
    const active = answers.active;

    if (revenue === "Under $1M" && active === "No, just exploring/starting out") {
      addMessage("Based on your answers, our free ebook and webinar are likely the best starting point for you to build foundational knowledge. They are packed with valuable insights from MAC's 30 years of experience. Please fill out the form on the landing page to access them!", 'bot');
      addMessage("Would you like to ask another question or go back to the main menu?", 'bot');
      setQuickReplyOptions(["I have a question about government contracting.", "Back to main menu"]);
      setShowQuickReplies(true);
      setConversationState('start');
    } else {
      addMessage("Great! Based on your needs, a consultation with MAC would be highly beneficial. MAC provides tailored, insider guidance for businesses like yours.", 'bot');
      addMessage("Please provide your contact details below so we can schedule a call.", 'bot');
      setShowContactForm(true);
      setShowQuickReplies(false);
      setConversationState('await_contact_details');
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactData.name || !contactData.email) {
      alert('Please provide your name and email.');
      return;
    }

    // In a real application, you would send this data to your server/CRM
    console.log("Consultation Request Submitted:");
    console.log("Name:", contactData.name);
    console.log("Email:", contactData.email);
    console.log("Phone:", contactData.phone);
    console.log("Needs:", contactData.message);
    console.log("Qualification Answers:", qualificationAnswers);

    addMessage("Thank you for your request! MAC's team will review your information and get in touch with you shortly.", 'bot');
    setShowContactForm(false);
    setQuickReplyOptions(["Start a new conversation"]);
    setShowQuickReplies(true);
    setConversationState('start_new_conversation');
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Toggle Button */}
      <button
        data-chatbot-toggle
        onClick={toggleChatbot}
        className={`w-14 h-14 bg-gradient-to-br from-navy-900 to-navy-800 hover:from-navy-800 hover:to-navy-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold">MAC's AI Assistant</h3>
            <button
              onClick={toggleChatbot}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 max-w-[85%] rounded-lg px-3 py-2 break-words ${
                  message.sender === 'bot'
                    ? 'bg-blue-50 text-navy-900 mr-auto'
                    : 'bg-navy-900 text-white ml-auto'
                }`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Contact Form */}
          {showContactForm && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <h4 className="font-semibold text-navy-900 mb-3">Request a Consultation</h4>
              <form onSubmit={handleContactSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contactData.name}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={contactData.email}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone (Optional)"
                  value={contactData.phone}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Briefly describe your needs..."
                  value={contactData.message}
                  onChange={handleContactChange}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          )}

          {/* Input Area */}
          {!showContactForm && (
            <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
              {/* Quick Replies */}
              {showQuickReplies && quickReplyOptions.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3 max-h-32 overflow-y-auto">
                  {quickReplyOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(option)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-xs transition-colors flex-shrink-0 whitespace-nowrap"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {/* Text Input */}
              {!showQuickReplies && (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleUserInput(userInput)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleUserInput(userInput)}
                    className="bg-gold-600 hover:bg-gold-700 text-white p-2 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;