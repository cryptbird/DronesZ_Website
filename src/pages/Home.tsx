import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Target, Package, ShoppingCart, Settings, TestTube, Database } from 'lucide-react';
import DroneModel from '../components/DroneModel';
import TypewriterText from '../components/TypewriterText';
import './Home.css';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Start the second line after the first line finishes
    const timer = setTimeout(() => {
      setShowSecondLine(true);
    }, 3000); // Wait for first line to complete

    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    { icon: <Package />, title: 'Custom Drones', path: '/products#custom' },
    { icon: <Shield />, title: 'Counter Systems', path: '/products#counter' },
    { icon: <Zap />, title: 'Consumer Drones', path: '/products#consumer' },
    { icon: <Target />, title: 'Components', path: '/products#components' },
    { icon: <ShoppingCart />, title: 'Marketplace', path: '/products#marketplace' },
  ];

  const labServices = [
    {
      icon: <Settings size={32} />,
      title: 'Research & Development',
      description: 'State-of-the-art R&D facilities for drone technology innovation and testing.'
    },
    {
      icon: <TestTube size={32} />,
      title: 'Testing & Validation',
      description: 'Comprehensive testing protocols for safety, performance, and regulatory compliance.'
    },
    // {
    //   icon: <Cpu size={32} />,
    //   title: 'AI & Machine Learning',
    //   description: 'Advanced AI integration for autonomous flight, object detection, and predictive maintenance.'
    // },
    {
      icon: <Database size={32} />,
      title: 'Data Analytics',
      description: 'Real-time data collection and analytics for performance optimization and insights.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          {/* Text Content */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              <TypewriterText
                text="Redefining Flight."
                speed={80}
                delay={500}
                className="text-gradient"
              />
              <br />
              {showSecondLine && (
                <TypewriterText
                  text="Assembling the Future."
                  speed={80}
                  delay={0}
                  className="text-gradient"
                />
              )}
            </h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Advanced aerial systems for consumers, defense, and industry
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <Link to="/products" className="btn btn-primary">
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <Link to="/products#custom" className="btn btn-secondary">
                Customize Your Drone
              </Link>
            </motion.div>
          </motion.div>

          {/* Drone Model - Now below the text */}
          <motion.div 
            className="hero-drone-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div 
              className="parallax-drone"
              style={{
                transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) rotateY(${mousePosition.x * 15}deg) rotateX(${mousePosition.y * 15}deg)`,
              }}
            >
              <DroneModel />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Brief Section */}
      <section className="company-brief section">
        <div className="container">
          <motion.div 
            className="brief-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About DroneZ</h2>
            <p className="brief-text">
              DroneZ pioneers advanced aerial systems for consumers, defense, and industry. 
              From agile racing drones to tactical counter-drone systems – we engineer every 
              revolution in the air.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Innovation Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-grid">
            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">
                <Zap size={32} />
              </div>
              <h3>Innovation</h3>
              <p>Cutting-edge technology and engineering excellence in every drone we build.</p>
            </motion.div>

            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">
                <Shield size={32} />
              </div>
              <h3>Security</h3>
              <p>Advanced counter-drone systems protecting critical infrastructure and airspace.</p>
            </motion.div>

            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">
                <Target size={32} />
              </div>
              <h3>Precision</h3>
              <p>Unmatched accuracy and reliability for professional and recreational applications.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lab Setup Service Section */}
      <section className="lab-section section">
        <div className="container">
          <motion.div 
            className="lab-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Lab Setup Services</h2>
            <p className="lab-description">
              Transform your organization with our comprehensive drone laboratory setup services. 
              From concept to deployment, we provide end-to-end solutions for research institutions, 
              universities, and corporate R&D facilities. Our expertise spans advanced testing protocols, 
              AI integration, and regulatory compliance to accelerate your drone technology development.
            </p>
          </motion.div>

          <div className="lab-services-grid">
            {labServices.map((service, index) => (
              <motion.div 
                key={service.title}
                className="lab-service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="lab-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn btn-primary">
              Request Lab Setup Consultation
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="highlights-section">
        <div className="container">
          <motion.div 
            className="highlights-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <Link 
                key={highlight.title}
                to={highlight.path}
                className="highlight-card metallic metallic-hover"
              >
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h4>{highlight.title}</h4>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 