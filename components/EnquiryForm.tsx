import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitEnquiry, EnquiryData } from '../services/supabase';

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    email: '',
    phone: '',
    query: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await submitEnquiry(formData);
      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', query: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit enquiry.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Visual/Info */}
          <div className="md:w-5/12 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Start Your Journey</h3>
              <p className="text-slate-300 mb-8">
                Ready to explore? Fill out the form and our experts will get back to you with a personalized plan.
              </p>
            </div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Send size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email us</p>
                  <p className="font-semibold">contact@wanderlust.ai</p>
                </div>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-7/12 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tell us about your plans</label>
                <textarea
                  name="query"
                  required
                  rows={4}
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  placeholder="I want to visit Japan in Spring..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  status === 'success' 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-slate-900 hover:bg-slate-800'
                }`}
              >
                {status === 'loading' && (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
                {status === 'success' && <CheckCircle size={20} />}
                {status === 'error' && <AlertCircle size={20} />}
                
                {status === 'idle' && 'Send Enquiry'}
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Enquiry Sent!'}
                {status === 'error' && 'Try Again'}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;