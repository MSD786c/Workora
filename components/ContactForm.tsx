'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, we’ll get back to you soon!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Your Name"
        className="w-full border border-gray-300 p-3 rounded"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Your Email"
        className="w-full border border-gray-300 p-3 rounded"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
        placeholder="Your Message"
        rows={5}
        className="w-full border border-gray-300 p-3 rounded"
      ></textarea>
      <button
        type="submit"
        className="bg-[#d4af62] text-white py-2 px-6 rounded hover:bg-[#c19c4f] transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
