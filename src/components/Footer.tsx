import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, 
  Linkedin, Instagram, ArrowUp, Shield, Zap, Target, Package, ShoppingCart
} from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const productCategories = [
    { name: 'Custom Drones', path: '/products#custom', icon: <Package size={16} /> },
    { name: 'Counter Systems', path: '/products#counter', icon: <Shield size={16} /> },
    { name: 'Consumer Drones', path: '/products#consumer', icon: <Zap size={16} /> },
    { name: 'Components', path: '/products#components', icon: <Target size={16} /> },
    { name: 'Marketplace', path: '/products#marketplace', icon: <ShoppingCart size={16} /> },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/dronez',
      color: '#0077b5'
    },
    {
      icon: <Instagram size={20} />,
      name: 'Instagram',
      url: 'https://instagram.com/dronez_official',
      color: '#e4405f'
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">DroneZ</h3>
            <p className="footer-description">
              Redefining Flight. Assembling the Future. Advanced aerial systems for consumers, 
              defense, and industry.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <div className="social-icon" style={{ color: social.color }}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Products</h4>
            <ul className="footer-links">
              {productCategories.map((product) => (
                <li key={product.name}>
                  <Link to={product.path} className="footer-link">
                    <span className="link-icon">{product.icon}</span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:info@dronez.com">info@dronez.com</a>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>DroneZ Headquarters, Tech Park, Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} DroneZ. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/support" className="footer-bottom-link">Support</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer; 