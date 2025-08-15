import React from 'react';
import LandingPage from './components/LandingPage';
import Chatbot from './components/Chatbot';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LandingPage />
      <Chatbot />
    </div>
  );
}

export default App;