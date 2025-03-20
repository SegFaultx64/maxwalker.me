'use client';

import { useState } from 'react';
import PosterizedImage from '../../components/posterized-image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'General Inquiry'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        subject: 'General Inquiry'
      });
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="relative pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 radical-grid-light dark:radical-grid opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <header className="py-12 md:py-20 relative">
            <div className="absolute top-0 left-0 w-12 h-12 border border-radical-primary-light/50 dark:border-radical-primary-DEFAULT/50 opacity-50"></div>
            
            {/* Title with glitch effect */}
            <h1 className="radical-heading relative inline-block">
              <span className="text-outline-light dark:text-outline text-6xl sm:text-7xl uppercase tracking-tighter">CONTACT</span>
              <span className="absolute top-1 left-1 text-radical-primary-light dark:text-radical-primary-DEFAULT text-6xl sm:text-7xl uppercase tracking-tighter radical-glitch">CONTACT</span>
            </h1>
            
            <div className="h-px w-24 bg-radical-primary-light dark:bg-radical-primary-DEFAULT my-8"></div>
            
            <p className="radical-subheading text-radical-dark/80 dark:text-radical-light/80 max-w-lg">
              <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">{'// '}</span>
              Get in touch to discuss your startup needs
            </p>
          </header>

          <section className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="space-y-6 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70 mb-8">
                  <p>
                    Whether you&apos;re looking to build an MVP, need help with technical choices, or want to discuss scaling your startup, I&apos;m here to help. Fill out the form and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 p-6 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT transition-all duration-300">
                    <div className="font-mono text-radical-primary-light dark:text-radical-primary-DEFAULT uppercase tracking-wider text-xs mb-2">Email</div>
                    <a href="mailto:max@pitonlabs.com" className="font-mono text-radical-dark dark:text-radical-light hover:text-radical-primary-light dark:hover:text-radical-primary-DEFAULT transition-colors">
                      max@pitonlabs.com
                    </a>
                  </div>
                  
                  <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 p-6 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT transition-all duration-300">
                    <div className="font-mono text-radical-primary-light dark:text-radical-primary-DEFAULT uppercase tracking-wider text-xs mb-2">Location</div>
                    <p className="font-mono text-radical-dark/80 dark:text-radical-light/80">
                      Saratoga Springs, NY
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_abandon_01880443-fc44-4d8f-832a-91fe0d06ad45_0.png"
                    alt="Maxwell Walker - Startup Engineer Contact"
                    priority={true}
                    glitchEffect={true}
                    className="w-full h-full"
                  />
                  <div className="mt-2 font-mono text-xs text-radical-light/40 uppercase tracking-wider flex items-center">
                    <span className="text-radical-secondary mr-2 block w-4 h-px bg-radical-secondary"></span>
                    Breaking barriers with innovative solutions
                  </div>
                </div>
              </div>
              
              <div>
                <div className="radical-border p-8 bg-radical-dark/80 backdrop-blur-md">
                  <h2 className="font-display text-3xl text-radical-light mb-6">
                    Send a <span className="text-radical-primary">Message</span>
                  </h2>
                  
                  {submitted ? (
                    <div className="space-y-4">
                      <div className="p-4 border border-radical-primary/70 bg-radical-primary/10">
                        <p className="font-mono text-sm text-radical-light">Your message has been sent successfully. I&apos;ll be in touch soon!</p>
                      </div>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 font-mono uppercase tracking-wider text-sm border border-radical-light/30 hover:border-radical-primary hover:bg-radical-primary/5 transition-colors duration-300 text-radical-light"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block font-mono text-radical-primary uppercase tracking-wider text-xs mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full p-3 bg-transparent border border-radical-primary/30 text-radical-light font-mono focus:border-radical-primary focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block font-mono text-radical-primary uppercase tracking-wider text-xs mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-3 bg-transparent border border-radical-primary/30 text-radical-light font-mono focus:border-radical-primary focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block font-mono text-radical-primary uppercase tracking-wider text-xs mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-3 bg-transparent border border-radical-primary/30 text-radical-light font-mono focus:border-radical-primary focus:outline-none transition-colors appearance-none"
                          style={{ backgroundImage: 'none' }}
                        >
                          <option value="General Inquiry" className="bg-radical-dark">General Inquiry</option>
                          <option value="MVP Development" className="bg-radical-dark">MVP Development</option>
                          <option value="Technical Advisory" className="bg-radical-dark">Technical Advisory</option>
                          <option value="Team Building" className="bg-radical-dark">Team Building</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block font-mono text-radical-primary uppercase tracking-wider text-xs mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full p-3 bg-transparent border border-radical-primary/30 text-radical-light font-mono focus:border-radical-primary focus:outline-none transition-colors"
                        />
                      </div>
                      
                      {error && (
                        <div className="p-3 border border-radical-secondary/70 bg-radical-secondary/10">
                          <p className="font-mono text-sm text-radical-secondary">{error}</p>
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="radical-border px-8 py-3 font-mono uppercase tracking-wider text-sm bg-radical-dark text-radical-primary hover:bg-radical-primary/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 