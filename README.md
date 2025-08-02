# DronesZ Website

A modern, responsive website for DronesZ - Advanced aerial systems for consumers, defense, and industry.

## Features

- 🚁 **Custom Drone Assembly**: Design and build custom drones for specific purposes
- 🛡️ **Counter Drone Systems**: Advanced security solutions for critical infrastructure
- 🛒 **Consumer Drones**: Premium drones for enthusiasts and professionals
- 🔧 **Components**: High-quality drone components (Coming Soon)
- 🏪 **Marketplace**: Verified seller network for drone solutions
- 🧪 **Lab Setup Services**: Comprehensive laboratory setup for research institutions
- 📧 **Contact Form**: EmailJS-powered contact form for inquiries

## EmailJS Setup for Contact Form

The contact form uses EmailJS to send emails to `dronesZ@gmail.com`. Follow these steps to set it up:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com) and create a free account
2. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}
Message: {{message}}

This message was sent from the DronesZ website contact form.
```

4. Note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update Configuration
Replace the placeholder values in `src/pages/Contact.tsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

### 6. Environment Variables (Recommended)
For better security, use environment variables:

1. Create a `.env` file in the root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the Contact.tsx file to use environment variables:
```javascript
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Dependencies

- React 18
- TypeScript
- Framer Motion (animations)
- Lucide React (icons)
- EmailJS (contact form)
- React Router (navigation)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── DroneModel.tsx   # 3D drone model
│   ├── TypewriterText.tsx # Animated text
│   └── Footer.tsx       # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Products.tsx    # Products page
│   └── Contact.tsx     # Contact page
├── styles/             # Global styles
└── App.tsx             # Main app component
```

## Features Overview

### Home Page
- Hero section with 3D drone model
- Company brief and mission
- Lab setup services showcase
- Product highlights

### Products Page
- Custom drone assembly
- Counter drone systems
- Consumer drones
- Components (coming soon)
- Marketplace access
- Lab setup services

### Contact Page
- Contact information
- EmailJS-powered contact form
- Social media links
- Interactive map placeholder

## Styling

The website uses a modern, dark theme with:
- Metallic gradients
- Smooth animations
- Responsive design
- Professional typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to DronesZ.

## Support

For technical support or questions about the website, contact:
- Email: dronesZ@gmail.com
- Phone: +91 98765 43210
