import React, { useState } from 'react';
import { Download, CheckCircle, Gift, Calendar } from 'lucide-react';

interface LeadCaptureFormProps {
  onSubmit: () => void;
  submitted: boolean;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ onSubmit, submitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Lead captured:', formData);
    setIsSubmitting(false);
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
        <p className="text-lg text-green-700 mb-6">
          You'll receive your free guide within the next few minutes. Check your email inbox (and spam folder just in case).
        </p>
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <Gift className="w-8 h-8 text-gold-600 mx-auto mb-2" />
          <p className="font-semibold text-navy-900">You're automatically entered for the webinar drawing!</p>
          <p className="text-sm text-gray-600 mt-1">Winners will be announced in January 2026</p>
        </div>
      </div>
    );
  }

  return (
    <div id="lead-form" className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 text-center">
        <Download className="w-12 h-12 mx-auto mb-4 text-gold-400" />
        <h2 className="text-3xl font-bold mb-4">Get Your Free Guide Now</h2>
        <p className="text-xl text-gray-200">Plus automatically enter the webinar drawing</p>
      </div>
      
      <div className="p-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gold-50 rounded-lg p-6 border border-gold-200">
            <div className="flex items-center mb-3">
              <Download className="w-6 h-6 text-gold-600 mr-2" />
              <h3 className="font-bold text-navy-900">Instant Download</h3>
            </div>
            <p className="text-gray-700">Get immediate access to the complete "Top 3 Mistakes" guide in your email</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center mb-3">
              <Calendar className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="font-bold text-navy-900">Webinar Entry</h3>
            </div>
            <p className="text-gray-700">Automatically entered for our $1,500 value webinar drawing in January 2026</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all"
              placeholder="Enter your email address"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent transition-all"
              placeholder="Enter your phone number"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email}
            className="w-full bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Get My Free Guide + Webinar Entry
              </div>
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            We respect your privacy. Your information will never be shared and you can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureForm;