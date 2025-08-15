import React, { useState } from 'react';
import { ChevronDown, CheckCircle, Users, TrendingUp, Shield, FileText, Calendar, Phone, Mail } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

const LandingPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-600 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Avoid the <span className="text-gold-400">Top 3 Costly</span><br />
              Government Contracting<br />
              <span className="text-gold-400">Mistakes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Learn insider secrets from MAC, a former government approvals officer with 30+ years of experience
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-gold-400">FREE Guide Includes:</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Mistake #1: Generic Proposals</h3>
                  <p className="text-gray-300 text-sm">Why template submissions fail and how to craft winning proposals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Mistake #2: Pricing Errors</h3>
                  <p className="text-gray-300 text-sm">Common cost proposal mistakes that lead to disqualification</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Mistake #3: Compliance Gaps</h3>
                  <p className="text-gray-300 text-sm">How to navigate the 'small print' and avoid automatic rejection</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gold-600 text-navy-900 rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-2">BONUS: FREE Webinar Access</h3>
            <p className="text-lg">Get a chance to attend our exclusive webinar "Mastering Government Submissions" (Value: $1,500)</p>
            <p className="text-sm mt-2 opacity-90">Winners will be selected by drawing in January 2026</p>
          </div>

          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-gold-400" />
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <LeadCaptureForm onSubmit={() => setFormSubmitted(true)} submitted={formSubmitted} />
        </div>
      </section>

      {/* Content Section - Top 3 Mistakes Guide */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              The Top 3 Costly Government Contracting Mistakes
            </h2>
            <p className="text-xl text-gray-600">
              Insider insights from MAC's 30+ years as a government approvals officer
            </p>
          </div>

          {/* Mistake #1 */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900">Mistake #1: Generic, Template-Based Proposals</h3>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>The Problem:</strong> Many contractors submit generic proposals that fail to address the specific needs and requirements outlined in the RFP. These template-based submissions immediately signal to evaluators that you haven't taken the time to understand their unique challenges.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It Happens:</strong> Time constraints and limited resources often lead contractors to reuse previous proposals with minimal customization. However, government evaluators can spot these generic submissions immediately.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>The Cost:</strong> Generic proposals are typically eliminated in the first round of evaluation, wasting months of effort and thousands in proposal development costs.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <h4 className="font-bold text-green-800 mb-2">MAC's Solution:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Conduct thorough requirement analysis for each RFP</li>
                  <li>• Develop tailored technical approaches that directly address agency pain points</li>
                  <li>• Use specific language and terminology from the solicitation</li>
                  <li>• Demonstrate clear understanding of the agency's mission and goals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mistake #2 */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900">Mistake #2: Inadequate Cost Proposal Documentation</h3>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>The Problem:</strong> Contractors often submit cost proposals without proper documentation, unclear pricing structures, or fail to understand the specific contract type requirements. This leads to immediate disqualification or significant profit erosion.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It Happens:</strong> The complexity of government cost proposal requirements is often underestimated. Different contract types (FFP, Cost-Plus, T&M) have specific documentation and pricing requirements that many contractors don't fully understand.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>The Cost:</strong> Poor cost proposals can result in disqualification, unrealistic pricing that leads to losses, or leaving money on the table through underpricing.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <h4 className="font-bold text-green-800 mb-2">MAC's Solution:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Master the documentation requirements for each contract type</li>
                  <li>• Develop comprehensive cost models with proper backup</li>
                  <li>• Understand risk allocation and pricing strategies</li>
                  <li>• Ensure compliance with Cost Accounting Standards (CAS)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mistake #3 */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900">Mistake #3: Ignoring the Compliance Matrix and 'Small Print'</h3>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>The Problem:</strong> Many contractors focus solely on the technical requirements while overlooking critical compliance requirements buried in Section L (Instructions to Offerors) and Section M (Evaluation Criteria). Missing even minor compliance requirements can result in automatic rejection.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It Happens:</strong> The volume of requirements in government solicitations can be overwhelming. Contractors often rush through compliance requirements to focus on technical content, not realizing that non-compliance is an automatic disqualifier.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>The Cost:</strong> Compliance failures result in immediate rejection regardless of how strong your technical proposal might be. This represents a complete loss of proposal development investment.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <h4 className="font-bold text-green-800 mb-2">MAC's Solution:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Create detailed compliance matrices before writing begins</li>
                  <li>• Implement multi-layer compliance review processes</li>
                  <li>• Understand the evaluation process from the government's perspective</li>
                  <li>• Address every requirement explicitly with clear cross-references</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-navy-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Avoid These Costly Mistakes?</h3>
            <p className="text-xl mb-6">Get the complete guide and bonus webinar access above, or speak with MAC directly about your specific situation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#lead-form" className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Guide
              </a>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-3 rounded-lg font-semibold transition-colors" onClick={() => document.querySelector('[data-chatbot-toggle]')?.click()}>
                Chat with MAC's Assistant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About MAC Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Meet MAC</h2>
              <p className="text-lg text-gray-700 mb-4">
                With over 30 years as a government approvals officer, MAC has seen thousands of proposals from both sides of the table. He knows exactly what government evaluators look for and what causes immediate rejection.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Now MAC shares his insider knowledge to help contractors avoid the costly mistakes that kill deals before they even get started.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-gold-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-navy-900">30+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-gold-600 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-navy-900">1000+</div>
                  <div className="text-sm text-gray-600">Proposals Reviewed</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">What Clients Say</h3>
              <blockquote className="text-lg mb-4 italic">
                "MAC's insights completely transformed our approach to government contracting. We went from a 15% win rate to over 60% in just one year."
              </blockquote>
              <cite className="text-gold-400 font-semibold">- Fortune 500 Defense Contractor</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-600 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">MAC Government Contracting</h3>
            <p className="text-gray-400">Insider guidance for government contracting success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Proposal Writing</li>
                <li>Cost Proposal Development</li>
                <li>Compliance Review</li>
                <li>Contract Strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Free Guide</li>
                <li>Webinar Series</li>
                <li>Blog Articles</li>
                <li>Case Studies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Available via consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact through chatbot</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">© 2025 MAC Government Contracting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;