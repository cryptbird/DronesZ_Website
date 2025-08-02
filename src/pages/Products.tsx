import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, Shield, Zap, Target, ShoppingCart, 
  ArrowRight, RotateCcw, Eye, Settings, 
  Radio, Battery, TestTube, Cpu, Database
} from 'lucide-react';
import './Products.css';

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState('custom');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [showMarketplaceForm, setShowMarketplaceForm] = useState(false);
  const [showLabForm, setShowLabForm] = useState(false);

  const customDrones = [
    { name: '<4 inch Drone', icon: <Package /> },
    { name: '5 inch Drone', icon: <Package /> },
    { name: '7 inch Drone', icon: <Package /> },
    { name: '10 inch Drone', icon: <Package /> },
    { name: 'Surveillance Drone', icon: <Eye /> },
    { name: 'Payload Drone', icon: <Settings /> },
    { name: 'Inspection Drone', icon: <Target /> },
  ];

  const counterSystems = [
    {
      name: 'Single Frequency Jammer',
      specs: ['500m RF Radius', 'Portable Battery Pack'],
      icon: <Radio />
    },
    {
      name: 'Triple Frequency Jammer',
      specs: ['4.2KM RF Radius', 'Rugged Build for Border/Industrial Security'],
      icon: <Shield />
    }
  ];

  const labServices = [
    {
      icon: <Settings size={32} />,
      title: 'Research & Development',
      description: 'State-of-the-art R&D facilities with advanced prototyping capabilities, testing chambers, and innovation labs.',
      features: ['Prototype Development', 'Technology Integration', 'Innovation Workshops']
    },
    {
      icon: <TestTube size={32} />,
      title: 'Testing & Validation',
      description: 'Comprehensive testing protocols for safety, performance, and regulatory compliance across all drone systems.',
      features: ['Safety Testing', 'Performance Validation', 'Regulatory Compliance']
    },
    {
      icon: <Cpu size={32} />,
      title: 'AI & Machine Learning',
      description: 'Advanced AI integration for autonomous flight, object detection, and predictive maintenance systems.',
      features: ['Autonomous Flight', 'Object Detection', 'Predictive Analytics']
    },
    {
      icon: <Database size={32} />,
      title: 'Data Analytics',
      description: 'Real-time data collection and analytics for performance optimization and actionable insights.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Predictive Insights']
    }
  ];

  return (
    <div className="products-page">
      <div className="container">
        {/* Page Header */}
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">Advanced aerial solutions for every need</p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          className="product-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button 
            className={`tab ${activeTab === 'custom' ? 'active' : ''}`}
            onClick={() => setActiveTab('custom')}
          >
            <Package size={20} />
            Custom Drones
          </button>
          <button 
            className={`tab ${activeTab === 'counter' ? 'active' : ''}`}
            onClick={() => setActiveTab('counter')}
          >
            <Shield size={20} />
            Counter Systems
          </button>
          <button 
            className={`tab ${activeTab === 'consumer' ? 'active' : ''}`}
            onClick={() => setActiveTab('consumer')}
          >
            <Zap size={20} />
            Consumer Drones
          </button>
          <button 
            className={`tab ${activeTab === 'components' ? 'active' : ''}`}
            onClick={() => setActiveTab('components')}
          >
            <Settings size={20} />
            Components
          </button>
          <button 
            className={`tab ${activeTab === 'marketplace' ? 'active' : ''}`}
            onClick={() => setActiveTab('marketplace')}
          >
            <ShoppingCart size={20} />
            Marketplace
          </button>
          <button 
            className={`tab ${activeTab === 'lab' ? 'active' : ''}`}
            onClick={() => setActiveTab('lab')}
          >
            <TestTube size={20} />
            Lab Setup
          </button>
        </motion.div>

        {/* Content Sections */}
        <div className="product-content">
          {/* Custom Drone Assembly */}
          {activeTab === 'custom' && (
            <motion.div 
              key="custom"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="product-section"
            >
              <div className="section-header">
                <h2>Design Your Flight</h2>
                <p>Choose your purpose. We'll build the drone.</p>
              </div>
              
              <div className="drone-grid">
                {customDrones.map((drone, index) => (
                  <motion.div 
                    key={drone.name}
                    className="drone-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="drone-icon">
                      {drone.icon}
                    </div>
                    <h3>{drone.name}</h3>
                  </motion.div>
                ))}
              </div>
              
              <div className="section-cta">
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowCustomForm(true)}
                >
                  Request Customization
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Counter Drone System */}
          {activeTab === 'counter' && (
            <motion.div 
              key="counter"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="product-section"
            >
              <div className="section-header">
                <h2>Secure Your Skies</h2>
                <p>Advanced counter-drone systems for defense and security</p>
              </div>
              
              <div className="counter-systems">
                {counterSystems.map((system, index) => (
                  <motion.div 
                    key={system.name}
                    className="counter-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="counter-icon">
                      {system.icon}
                    </div>
                    <h3>{system.name}</h3>
                    <ul>
                      {system.specs.map((spec, specIndex) => (
                        <li key={specIndex}>{spec}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              
              <div className="section-cta">
                <button className="btn btn-primary">
                  Enquire for Demo
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Consumer Drone */}
          {activeTab === 'consumer' && (
            <motion.div 
              key="consumer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="product-section"
            >
              <div className="section-header">
                <h2>Fly. See. Experience.</h2>
                <p>Premium consumer drones for enthusiasts and professionals</p>
              </div>
              
              <div className="consumer-product">
                <div className="product-showcase">
                  <div className="product-image">
                    <div className="drone-preview">
                      <Package size={80} />
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>3.5 inch Drone</h3>
                    <p className="product-description">
                      High-performance racing drone with advanced flight controller and HD camera system.
                    </p>
                    <div className="product-specs">
                      <div className="spec">
                        <Battery size={16} />
                        <span>25 min flight time</span>
                      </div>
                      <div className="spec">
                        <Radio size={16} />
                        <span>2.4GHz control</span>
                      </div>
                      <div className="spec">
                        <Eye size={16} />
                        <span>4K Camera</span>
                      </div>
                    </div>
                    <div className="product-price">
                      <span className="price">₹55,000</span>
                      <span className="includes">Includes VR Goggles + Controller</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Drone Components */}
          {activeTab === 'components' && (
            <motion.div 
              key="components"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="product-section"
            >
              <div className="section-header">
                <h2>Drone Components</h2>
                <p>Coming Soon - Premium components for custom builds</p>
              </div>
              
              <div className="coming-soon">
                <div className="construction-animation">
                  <RotateCcw size={80} />
                </div>
                <h3>Under Construction</h3>
                <p>We're building something amazing. Stay tuned for premium drone components.</p>
                
                <div className="notify-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email for updates"
                    className="notify-input"
                  />
                  <button className="btn btn-primary">Notify Me</button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Marketplace */}
          {activeTab === 'marketplace' && (
            <motion.div 
              key="marketplace"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="product-section"
            >
              <div className="section-header">
                <h2>Marketplace Access</h2>
                <p>Connect with verified sellers and find the perfect drone solutions</p>
              </div>
              
              <div className="marketplace-content">
                <div className="marketplace-info">
                  <h3>Join Our Marketplace</h3>
                  <p>
                    Access a curated network of drone manufacturers, component suppliers, and service providers. 
                    All sellers are verified and quality-assured.
                  </p>
                  <ul>
                    <li>Verified sellers only</li>
                    <li>Quality assurance</li>
                    <li>Secure transactions</li>
                    <li>Technical support</li>
                  </ul>
                </div>
                
                <div className="marketplace-cta">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowMarketplaceForm(true)}
                  >
                    Request Access
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Lab Setup Service */}
          {activeTab === 'lab' && (
            <motion.div 
              key="lab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="product-section"
            >
              <div className="section-header">
                <h2>Lab Setup Services</h2>
                <p>Transform your organization with comprehensive drone laboratory solutions</p>
              </div>
              
              <div className="lab-services-overview">
                <div className="lab-description">
                  <p>
                    From concept to deployment, we provide end-to-end laboratory setup services for research institutions, 
                    universities, and corporate R&D facilities. Our expertise spans advanced testing protocols, 
                    AI integration, and regulatory compliance to accelerate your drone technology development.
                  </p>
                </div>
                
                <div className="lab-services-grid">
                  {labServices.map((service, index) => (
                    <motion.div 
                      key={service.title}
                      className="lab-service-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="service-icon">
                        {service.icon}
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <ul className="service-features">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
                
                <div className="lab-cta">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowLabForm(true)}
                  >
                    Request Lab Setup Consultation
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Customization Form Modal */}
      {showCustomForm && (
        <div className="modal-overlay" onClick={() => setShowCustomForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Request Custom Drone</h3>
            <form className="custom-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email" required />
              <select required>
                <option value="">Select Drone Type</option>
                <option value="racing">Racing Drone</option>
                <option value="surveillance">Surveillance Drone</option>
                <option value="payload">Payload Drone</option>
                <option value="inspection">Inspection Drone</option>
              </select>
              <textarea placeholder="Special Requirements" rows={4}></textarea>
              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">Submit Request</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowCustomForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Marketplace Form Modal */}
      {showMarketplaceForm && (
        <div className="modal-overlay" onClick={() => setShowMarketplaceForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Seller Registration</h3>
            <form className="marketplace-form">
              <input type="text" placeholder="Company Name" required />
              <input type="text" placeholder="Contact Person" required />
              <input type="email" placeholder="Email" required />
              <select required>
                <option value="">Select Category</option>
                <option value="manufacturer">Drone Manufacturer</option>
                <option value="components">Component Supplier</option>
                <option value="services">Service Provider</option>
              </select>
              <textarea placeholder="Company Description" rows={4} required></textarea>
              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">Submit Application</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowMarketplaceForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lab Setup Form Modal */}
      {showLabForm && (
        <div className="modal-overlay" onClick={() => setShowLabForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Lab Setup Consultation</h3>
            <form className="lab-form">
              <input type="text" placeholder="Organization Name" required />
              <input type="text" placeholder="Contact Person" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Organization Type</option>
                <option value="university">University/Research Institution</option>
                <option value="corporate">Corporate R&D</option>
                <option value="government">Government Agency</option>
                <option value="startup">Startup/Innovation Lab</option>
              </select>
              <select required>
                <option value="">Lab Focus Area</option>
                <option value="rd">Research & Development</option>
                <option value="testing">Testing & Validation</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="analytics">Data Analytics</option>
                <option value="comprehensive">Comprehensive Lab</option>
              </select>
              <textarea placeholder="Project Requirements & Goals" rows={4} required></textarea>
              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">Request Consultation</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowLabForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products; 