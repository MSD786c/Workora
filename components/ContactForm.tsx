'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone, Building } from 'lucide-react';

const ContactForm = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    company: '',
    subject: '',
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const formFields = [
    { name: 'name', label: 'Your Name', type: 'text', icon: <User size={18} />, required: true },
    { name: 'email', label: 'Your Email', type: 'email', icon: <Mail size={18} />, required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', icon: <Phone size={18} />, required: false },
    { name: 'company', label: 'Company Name', type: 'text', icon: <Building size={18} />, required: false },
  ];

  const subjectOptions = [
    { value: '', label: 'Select Subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request a Quote' },
    { value: 'support', label: 'Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
  ];

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      {isSubmitted ? (
        <motion.div 
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Send size={24} className="text-green-600" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
        </motion.div>
      ) : (
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field) => (
              <motion.div key={field.name} variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={field.name}>
                  {field.label}{field.required && <span className="text-red-500">*</span>}
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    {field.icon}
                  </div>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.label}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af62] focus:border-transparent transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">
              Subject<span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af62] focus:border-transparent transition-all"
            >
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
              Message<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <MessageSquare size={18} />
              </div>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows={5}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af62] focus:border-transparent transition-all"
              ></textarea>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              className="w-full bg-[#d4af62] text-white py-3 px-6 rounded-md hover:bg-[#c9a458] transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="ml-2" />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      )}
    </div>
  );
};

export default ContactForm;
