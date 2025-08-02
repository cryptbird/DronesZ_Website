import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, 
  Linkedin, Instagram, Youtube,
  CheckCircle, AlertCircle, Loader
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // EmailJS configuration using environment variables
      // const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      // const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      // const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
      const serviceId = 'service_5r2fhzm';
      const templateId = 'template_0hiiyci';
      const publicKey = '48Q_QVt0MhUDw7kou';
      // Check if EmailJS is properly configured
      // if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      //   throw new Error('EmailJS not configured. Please set up your EmailJS credentials.');
      // }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! We will get back to you soon.');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      if (error instanceof Error && error.message.includes('EmailJS not configured')) {
        setStatusMessage('EmailJS is not configured. Please check the setup instructions below.');
      } else {
        setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly at dronesZ@gmail.com');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email',
      value: 'dronesZ@gmail.com',
      link: 'mailto:dronesZ@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <MapPin />,
      title: 'Address',
      value: 'DronesZ Headquarters, Tech Park, Bangalore, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/DronesZ',
      color: '#0077b5'
    },
    {
      icon: <Instagram />,
      name: 'Instagram',
      url: 'https://instagram.com/DronesZ_official',
      color: '#e4405f'
    },
    {
      icon: <Youtube />,
      name: 'YouTube',
      url: 'https://youtube.com/@DronesZ',
      color: '#ff0000'
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in touch with our team of drone experts</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information */}
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Get In Touch</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.title}
                  className="contact-info-card metallic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <h3>{info.title}</h3>
                  <a href={info.link} className="contact-link">
                    {info.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Send Us a Message</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                className="status-message success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle size={20} />
                <span>{statusMessage}</span>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                className="status-message error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle size={20} />
                <span>{statusMessage}</span>
              </motion.div>
            )}

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="user_name">Name *</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="user_email">Email *</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this regarding?"
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  disabled={isLoading}
                />
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader size={16} className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* EmailJS Setup Instructions */}
            {/* <div className="emailjs-setup">
              <h3>📧 EmailJS Setup Required</h3>
              <p>
                To enable email functionality and send messages to <strong>dronesZ@gmail.com</strong>, you need to:
              </p>
              <ol>
                <li>Create an account at <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">EmailJS.com</a></li>
                <li>Create an email service (Gmail, Outlook, etc.)</li>
                <li>Create an email template with variables: <code>{'{{user_name}}'}</code>, <code>{'{{user_email}}'}</code>, <code>{'{{subject}}'}</code>, <code>{'{{message}}'}</code></li>
                <li>Create a <code>.env</code> file in the root directory with your credentials</li>
              </ol>
              
              <div className="credentials-placeholder">
                <h4>Environment Variables (.env file):</h4>
                <code>
                  REACT_APP_EMAILJS_SERVICE_ID=your_service_id<br/>
                  REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id<br/>
                  REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
                </code>
              </div>
              
              <div className="template-example">
                <h4>Email Template Example:</h4>
                <code>
                  {`Subject: New Contact Form Submission from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}
Message: {{message}}

This message was sent from the DronesZ website contact form.`}
                </code>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="map-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>Interactive Map Coming Soon</p>
              <p>DronesZ Headquarters, Tech Park, Bangalore, India</p>
            </div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          className="social-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2>Follow Us</h2>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': social.color } as React.CSSProperties}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 