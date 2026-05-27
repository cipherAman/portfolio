// app/(sections)/contact/page.tsx

'use client';

import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen pt-28 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

            {[
              {
                icon: FiMail,
                label: 'Email',
                value: 'your.email@example.com',
                href: 'mailto:your.email@example.com',
              },
              {
                icon: FiPhone,
                label: 'Phone',
                value: '+91 XXXXX XXXXX',
                href: 'tel:+91XXXXXXXXXX',
              },
              {
                icon: FiLinkedin,
                label: 'LinkedIn',
                value: 'Your LinkedIn Profile',
                href: 'https://linkedin.com/in/yourprofile',
              },
              {
                icon: FiGithub,
                label: 'GitHub',
                value: 'Your GitHub Profile',
                href: 'https://github.com/yourprofile',
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 border border-gray-800 rounded-lg hover:border-blue-500/50 hover:bg-gray-900/50 transition-all group"
                >
                  <Icon className="text-blue-500 text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <p className="text-white font-medium hover:text-blue-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white font-medium py-2 rounded-lg transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-sm text-center"
                >
                  ✓ Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}